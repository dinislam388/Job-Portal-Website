import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import NotFound from "../Components/NotFond/NotFound";
import Users from "../Components/Users/Users";
import SeeDetails from "../Components/SeeDetails/SeeDetails";
import Home from "../Components/Home/HomeComp";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import FavoritePage from "../Pages/Favorite/FavoritePage";
import PersonalProfile from "../Components/PersonalProfile/PersonalProfile";
import AddJobs from "../Pages/Add Jobs/AddJobs";
import AppyForm from "../Pages/Apply Job/AppyForm";
import Swal from "sweetalert2";
import axios from "axios";
import EditeJobs from "../Components/EditeJobs/EditeJobs";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: (
          <PrivateRoute>
            <FavoritePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/personalprofile",
        element: <PersonalProfile />,
      },
      {
        path: "/addjobs",
        element: <PrivateRoute>
          <AddJobs />
        </PrivateRoute>,
      },
      {
        path: "/appyform",
        element: <AppyForm />,
      },
      {
        path: "/editejob",
        element: <EditeJobs/>,
        loader: ({ params }) => {
          return fetch(`http://localhost:9000/jobs/${params.id}`)
        }
      },
      {
        path: "/users",
        element: 
        // (
          // <PrivateRoute>
            <Users />,
          // </PrivateRoute> 
        //  ), 
        action: async ({ request }) => {
          const jobData = Object.fromEntries(await request.formData());
          console.log(jobData);
          console.log(!Object.values(jobData).every((value) => !value.trim()));
          if (Object.values(jobData).every((value) => !value.trim())) {
            Swal.fire({
              title: "Add Valid Job Info",
              icon: "warning",
            });
            return false;
          } else {
            await axios.post("http://localhost:9000/jobs", jobData);
            Swal.fire({
              title: "Add Valid Job Info",
              icon: "success",
            });
          }
          return null;
        },
        loader: () => fetch("http://localhost:9000/jobs"),
      },

      {
        path: "/users/:id",
        element: (
          <PrivateRoute>
            <SeeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:9000/jobs/${params.id}`);
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
