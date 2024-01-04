import { Link, useNavigate } from "react-router-dom";
import "./User.css";
import { MdFavoriteBorder } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useContext, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { jibikaContext } from "../../context/ContexJobs";
// import { data } from "autoprefixer";

const User = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);
  const [favorite, setFavorite] = useState(usersData);
  const navigate = useNavigate();

  // ===========> Delete Job Post <============

  const handleDeleteJob = async (userid) => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${userid}`);
      setUsers(users?.filter((data) => data.id !== userid));
    } catch (error) {
      console.error("Error:", error);
      // Handle errors
    }
  };
  // =============> End Delete Functionality <==================>>

  // =============> Favorite Jobs <==============

  // const handleFavoriteJob = async(userid) => {
  //   try {
  //     await axios.favorite(`http://localhost:9000/jobs/${userid}`)
  //     setFavorite(users?.filter((data) => data.id !== userid))
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  // =============> Add Favorite End <==============

const {handleEdit} = useContext(jibikaContext)

  return (
    <>
      {users &&
        users?.map((user) => (
          <div className="jobCards" key={user.id}>
            <div className="jobLogo">
              <img src={user.logo} alt="" />
              <div className="jobCrad">
                <MdFavoriteBorder />

                <Link to="/addjobs">
                  <MdAddCircle className="addbtn" />
                </Link>

                <Link to={`/editjob/${user.id}`}>
                {/* <button onClick={() => handleEdit(user.id)}> */}
                  <FaRegEdit className="addbtn" />
                  </Link>
                {/* </button> */}

                <RiDeleteBin5Line
                  className="deleteBtn"
                  onClick={() => handleDeleteJob(user.id)}
                />
              </div>
            </div>

            <h3 className="companyName">{user.companyName}</h3>
            <h2 className="jobPosition">{user.position}</h2>
            <h4 className="jobTitle">{user.title}</h4>
            <div className="cardBtn">
              <Link className="dtailsBtn" to={`/users/${user.id}`}>
                <button>See Details</button>
              </Link>

              <Link className="dtailsBtn" to="/appyform">
                <button>Apply Now</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default User;
