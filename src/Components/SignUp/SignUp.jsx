import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../FireBase/Firebase";
import { toast } from "react-toastify";
import "./SignUp.css";
import myImg from "./signup logo.png";
import GoogleGithubAuth from "../withGoogleGithub/GoogleGithubAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const ConfomPass = e.target.cpassword.value;
    // console.log(name, email, password, ConfomPass);
    if (password !== ConfomPass) {
      return toast.error("Password do no tmatch");
    }
    // password !==ConfomPass || toast.error("Please fill up the form")
    // password !==ConfomPass && toast.error("Passwords do not match. please try again")

    // Sign up and FireBase access email and password
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/");
    return toast.success("Sign up success fully!", { toastId: "customId" });
  }

  if (user) {
  }
  return (
    <div>
      <section>
        <div className="fullForm">
          <div className="signUpFullForm">
            <div className="headImg">
              <img src={myImg} alt="" />
            </div>
            <h2 className="headingText">Sign up to create account</h2>
            Already have an account?{" "}
            <Link className="signinInSignUp" to="/login">
              <button>Sign in</button>
            </Link>

            <form onSubmit={handleSignUp} method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="">
                    <input
                      className="inputFild"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      id="name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="inputFild"
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      className="inputFild"
                      type="password"
                      name="password "
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Conform Password{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      className="inputFild"
                      type="password"
                      name="cpassword "
                      placeholder="Conform Password"
                      id="cpassword"
                    />
                    <div className="btDiv">
                      <button type="submit" className="registationBtn">
                        Registation
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" className="createBtn">
                    Create Account{" "}
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

export default SignUp;
