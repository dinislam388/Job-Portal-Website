import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, name, email } = user;
  return (
    <>
      <div className="cards">
        <div className="cardText">
          {/* <h4>{id}</h4> */}
          <h2 className="text-2xl">{name}</h2>
          <p>{email}</p>
        </div>
        <div className=" bg-white text-black rounded-full cursor-pointer hover:bg-slate-600 hover:text-white py-1 duration-300">
          <Link to={`/users/${id}`}>
            <button>See Details</button>
          </Link>
        </div>
      </div>

      {/* <Link to={`/users/${id}`}>
        <button>User Details</button>
      </Link> */}
    </>
  );
};

export default User;
