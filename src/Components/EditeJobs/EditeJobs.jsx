// import addJobLogo from "./add job.png";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import editeLogo from "./edite icon (2).png";
import { useState } from "react";
import axios from "axios";
// import { useContext } from "react";
// import { jibikaContext } from "../../context/ContexJobs";

const EditeJobs = () => {
  const navigate = useNavigate()
  const loadData = useLoaderData()
  // console.log(loadData);

  // const { title, logo, companyName, position, description } = loadData

  const [updateData, setUpdateData] = useState(loadData);
  console.log(updateData);

  const handleChange = (e) => {
    const {name, value} = e.target 
     setUpdateData({
      ...updateData,
      [name]: value
     })
  }

const handleInput = async (e) => {
await axios.put(`http://localhost:9000/jobs/${updateData.id}`, updateData)
navigate('/users')
}

  return (
    <div>
      <div className="AddJobConatiner">
        <div className="formBox">
          <Form onSubmit={handleInput}>
            <div className="inputFild">
              <div className="inputBoxArea">
                <div>
                  <img className="conatctImg" src={editeLogo} alt="" />
                </div>
                <h1 className="contactHeading">Edite Job</h1>
                <input
                  name="title"
                  value={updateData.title}
                  required
                  type="text"
                  onChange={handleChange}
                  placeholder="Job Title"
                />{" "}
                <br />
                <input
                  name="logo"
                  value={updateData.logo}
                  required
                  type="url"
                  onChange={handleChange}
                  placeholder="Logo Link"
                />{" "}
                <br />
                <input
                  name="companyName"
                  required
                  value={updateData.companyName}
                  type="text"
                  onChange={handleChange}
                  placeholder="Company Name"
                />{" "}
                <br />
                <input
                  name="position"
                  required
                  value={updateData.position}
                  type="text"
                  onChange={handleChange}
                  placeholder="Job Position"
                />{" "}
                <br />
                <input
                  name="description"
                  required
                  type="text"
                  value={updateData.description}
                  onChange={handleChange}
                  placeholder="Short Description"
                />{" "}
                <br />
                {/* <Link to="/users"> */}
                <button navigate="/users" type="submit" className="submitBtn">
                  Update Job
                </button>
                {/* </Link> */}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditeJobs;
