import { Link } from "react-router-dom";
import "./User.css";
import { MdFavoriteBorder } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const User = ({ user }) => {
  const { id, logo, companyName, position, title, description } = user;
  return (
    <>
      <div className="jobCards">
        <div className="jobLogo">
          <img src={logo} alt="" />
            <div className="jobCrad">
              <MdFavoriteBorder />
              <MdAddCircle/>
              <FaRegEdit />
              <RiDeleteBin5Line />
            </div>
        </div>
        <h3 className="companyName">{companyName}</h3>
        <h2 className="jobPosition">{position}</h2>
        <h4 className="jobTitle">{title}</h4>
        <div className="cardBtn">
          <Link className="dtailsBtn" to={`/users/${id}`}>
            <button>See Details</button>
          </Link>

          <Link className="dtailsBtn" to={`/users/${id}`}>
            <button>Apply Now</button>
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
