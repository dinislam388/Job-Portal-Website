import { Link } from "react-router-dom";
import myImg  from "./login logo.png";
const LogIn = () => {
    return (
        <div>
            <section className="fullForm">
  <div className="signUpFullForm">
    <div className="headImg">
      <div>
      <img src={myImg} alt="" />
      </div>
      <h2 className="headingText">
        Sign in to your account
      </h2 >

        Don&#x27;t have an account?{" "}
        <Link className="signinInSignUp" to='/signup'><button>Create an new account</button></Link>

      <form action="#" method="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Email address{" "}
            </label>
            <div class="mt-2">
              <input
                className="inputFild"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
              <a
                href="#"
                title=""
                class="text-sm font-semibold text-black hover:underline"
              >
                {" "}
                Forgot password?{" "}
              </a>
            </div>
            <div class="mt-2">
              <input
                className="inputFild"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="createBtn"
            >
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
      <div className="SignUpIconHead">
              <button
                type="button"
                className="gitHubIcon"
              >
                <span className="GoogleIcon">
                  <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path className="GoogleIcon" d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
              <button
                type="button"
                className="gitHubIcon"
              >
                <span className="gitHubIcon">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clip-rule="evenodd"></path>
                  </svg>
                </span>
                Sign up with GitHub
              </button>
            </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default LogIn;