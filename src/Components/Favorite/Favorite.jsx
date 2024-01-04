import { useLoaderData } from "react-router-dom";
import "./Favorite.css"
const Favorite = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const filtereData = jobs.filter((job) => job.isFavorite);
  console.log(filtereData);
  return (
    <div>
      <div className="favourites">
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
              <p>{job.description}</p>
            </div>
            {/* <div className="job-actions flex jc-sb"> */}
              {/* <div>
                <button onClick={() => handleFavorite(job)}>
                  <FaHeart className={job.isFavourite && "heart"} />
                </button>
              </div>
              <div>
                <button onClick={() => handleDetails(job.id)}>Details</button>
                <button onClick={handleApplyNow}>Apply Now</button>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
