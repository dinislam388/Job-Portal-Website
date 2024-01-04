import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FireBase/Firebase";
import { useState } from "react";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";
import PersonalProfile from "../../../Components/PersonalProfile/PersonalProfile";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [isSignedIN, setIsSignedIn] = useState(false);

  const [isInfo, setIsInfo] = useState(false)

  const handleUserDetails = () => {
    setIsSignedIn(!isSignedIN);
  };
  const handleSignOut = () => {
    signOut(auth);
    setIsSignedIn(false);
    navigate("/");
    Swal.fire({
      title: "Signed out",
      icon: "info",
    });
  };
  return (
    <div>
      
      <>
        <div>
          <div className="header">
            <div className="logo">
              <h1>HJ</h1>
            </div>
            <div className="navBar">
              <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Jobs</NavLink>
                <NavLink to="/resume">Favorite</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {user ? (
                  <div onClick={handleUserDetails}>
                    {user?.photoURL ? (
                      <img className="userProfile" src={user.photoURL} alt="" />
                    ) : (
                      <FaUserCircle size="30px" color="#fff"/>
                    )}
                  </div>
                ) : (
                  <NavLink to="/login">SignIn</NavLink>
                  )}
              </ul>
            </div>  
          </div>
          {isSignedIN && (
            <div className="profileClickedInfo">
              <img className="profilePicClick" src={user.photoURL} alt="" />
              <h3 className="displayName">{user.displayName}</h3>
              <p className="displayemail">{user.email}</p>
              
              

              
              <button className="displaySignoutBtn" onClick={() => navigate("/personalprofile")}>More Info...</button>
              

              <button className="displaySignoutBtn" onClick={handleSignOut}>Sign out</button>
            </div>
          )}                
              
        </div>
      </>
    </div>
  );
};

export default NavBar;






// ===================================





