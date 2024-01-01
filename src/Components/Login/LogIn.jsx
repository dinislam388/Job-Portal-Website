import { Link, useNavigate } from "react-router-dom";
import myImg from "./login logo.png";
import GoogleGithubAuth from "../withGoogleGithub/GoogleGithubAuth";
import auth from "../../FireBase/Firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if(error){
      return Swal.fire({
        title: "Invalid information",
        icon: "error",
      });
    }
    if(user){
      navigate("/");
      return Swal.fire({
        title: "Signed in",
        icon: "success",
      });
    }
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.mail.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <section className="fullForm">
        <div className="signUpFullForm">
          <div className="headImg">
            <div>
              <img src={myImg} alt="" />
            </div>
            <h2 className="headingText">Sign in to your account</h2>
            Don&#x27;t have an account?{" "}
            <Link className="signinInSignUp" to="/signup">
              <button>Create an new account</button>
            </Link>
            <form onSubmit={handleForm}>
              <div className="space-y-5">
                <div>
                  <label htmlFor=""> Email address </label>
                  <div className="mt-2">
                    <input
                      name="mail"
                      className="inputFild"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor=""> Password </label>
                    <a href="#" title="">
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div>
                    <input
                      name="password"
                      className="inputFild"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button className="createBtn">
                    Get started{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <GoogleGithubAuth />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
