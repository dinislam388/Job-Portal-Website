// import addJobLogo from "./add job.png";
import { Form } from "react-router-dom";
import editeLogo from "./edite icon (2).png"
const EditeJobs = () => {
  return (
    <div>
      <div className="AddJobConatiner">
        <div className="formBox">
          <Form method="post" action="/users">
            <div className="inputFild">
              <div className="inputBoxArea">
                <div>
                  <img className="conatctImg" src={editeLogo} alt="" />
                </div>
                <h1 className="contactHeading">Edite Job</h1>
                <input
                  name="title"
                  required
                  type="text"
                  placeholder="Job Title"
                />{" "}
                <br />
                <input
                  name="logo"
                  required
                  type="url"
                  placeholder="Logo Link"
                />{" "}
                <br />
                <input
                  name="companyName"
                  required
                  type="text"
                  placeholder="Company Name"
                />{" "}
                <br />
                <input
                  name="position"
                  required
                  type="text"
                  placeholder="Job Position"
                />{" "}
                <br />
                <input
                  name="description"
                  required
                  type="text"
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
