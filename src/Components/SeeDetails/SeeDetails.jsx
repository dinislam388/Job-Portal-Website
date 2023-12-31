import { Link, useLoaderData } from "react-router-dom";
import "./SeeDetails.css";
const SeeDetails = () => {
  const details = useLoaderData();
  // console.log(details);

  return (
    <>
      <div className="detailsCard">
        <div className="details">
          <h1 className="detailsHeading">Job Details </h1>
          <img className="detailsJobLogo" src={details.logo} alt="" />
          <h2 className="companyNameDetails">{details.companyName}</h2>
          <h3 className="titleDetails">User Name: {details.title}</h3>
          <h3 className="positionDetails">Position: {details.position}</h3>
          <p className="descriptionDetails">
            <h3>Job Description: </h3>{details.description}
          </p>

          {/* Extra */}
          <div className="extraInfo">
          <h3 style={{textAlign: "center", marginBottom: "5px"}}>Education:</h3>
          <p>
            1. Bachelor's degree in Computer Engineering, Electrical
            Engineering, or a related field. <br />
            2. Master's degree preferred for some senior positions.
          </p>
          <h3 style={{textAlign: "center", marginBottom: "5px"}}>Technical Skills:</h3>
          <p>
            1. Programming languages (e.g., Python, Java, C++, C#, Javascript){" "}
            <br />
            2. Data structures and algorithms Operating systems (e.g., Windows,
            Linux) <br />
            3. Computer architecture and organization Networking protocols and
            concepts Database management systems (e.g., MySQL, PostgreSQL){" "}
            <br />
            4. Version control systems (e.g., Git) <br />
            5. Software development methodologies (e.g., Agile, Waterfall) <br />
            6. Problem-solving and analytical skills Attention to detail
          </p>
          </div>

          <Link to="/users">
            <button className="backBtn">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SeeDetails;
