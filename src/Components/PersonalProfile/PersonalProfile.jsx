import "./PersonalProfile.css"
const PersonalProfile = (user) => {
    const {photoURL, displayName, email, lastRefreshAt, lastSignInTime, creationTime,emailVerified } = user
    console.log(user);
  return (
    <>
    <div className="personalContainer">
        <h1 className="yourProfileText">Your Profile</h1>
        {/* <h1>h</h1> */}
        {/* <img src={user.photoURL} alt="" /> */}
    </div>
    </>
  )
}

export default PersonalProfile