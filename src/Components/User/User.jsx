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
        <h3 className="companyName">{companyName}</h3>
        <h2 className="jobPosition">{position}</h2>
        <h4 className="jobTitle">{title}</h4>
        {/* <p className="jobDescription">Desciption: This is see details.....</p> */}
        <div>
          <Link className="dtailsBtn" to={`/users/${id}`}>
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
