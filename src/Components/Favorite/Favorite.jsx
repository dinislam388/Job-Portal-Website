import { Link, useLoaderData } from "react-router-dom";
import "./Favorite.css"
const Favorite = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const filtereData = jobs.filter((job) => job.isFavorite);
  console.log(filtereData);
  return (
    <div>
      <div className="AllFavouritesCard">
        {filtereData.map((job) => (
          <div className="job-card" key={job.id}>
            <img
              src={job.logo}
              alt={job.companyName}
              className="company-logo"
            />
            <div className="job-details">
              <h2>{job.title}</h2>
              <p>{job.companyName}</p>
              <p>{job.position}</p>
              <Link to="/appyform">
              <button className="FavApplyBtn">Apply</button>
              </Link>
            </div>
              
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
