import { Link, useLoaderData } from "react-router-dom";
import "./SeeDetails.css"
const SeeDetails = () => {
    const details = useLoaderData()
    // console.log(details);

    return (
        <>
            <div className="detailsCard">
                <div className="details">
                <h1 className="detailsHeading">User Details</h1>

                <h2 className="text-2xl">Name: {details.name}</h2>
                <h4 className="text-[18px]">User Name: {details.username}</h4>
                <p className="text-[18px]">Email: {details.email}</p>
                <h4 className="text-[18px]">Address: {details.address.city}</h4>
                <p className="text-[18px]">{details.address.street}</p>
                <p className="text-[18px]">{details.address.zipcode}</p>
                <p className="text-[18px]">{details.address.street}</p>
                <Link to='/users'><button className="backBtn">Back</button></Link>
                </div>
            </div>
        </>
    );
};

export default SeeDetails;