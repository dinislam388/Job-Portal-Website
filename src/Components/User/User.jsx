import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, logo, companyName, position, title, description } = user;
  return (
    <>
      <div className="cards">
        <div className="jobLogo">
          <img src={logo} alt="" />
        </div>
        <h2>{companyName}</h2>
        <h4>{position}</h4>
        <h4>{title}</h4>
        <p>{description}</p>
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
