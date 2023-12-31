import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    // console.log(users);
    return (
        <>
            <div>
                <div className="heading">
                    <h1 className="text-4xl font-bold">All Job Post</h1>
                    <h2 className="text-3xl font-semibold">Total Availavail Jobs: {users.length}</h2>
                </div>
                <div className="card">
                    {
                        users.map((user) => (
                        <User key={user.id}
                        user = {user}
                        />))
                    }
                </div>
            </div>
        </>
    );
};

export default Users;