
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import NotFound from "../Components/NotFond/NotFound";
import Users from "../Components/Users/Users";
import SeeDetails from "../Components/SeeDetails/SeeDetails";
import Home from "../Components/Home/HomeComp";
import SignUp from "../Components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
              path: "/resume",
              element: <h2>skjdfhlsdkjfhsdkjf</h2>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/users",
                element: <Users/>,
                loader: () => fetch("http://localhost:9000/jobs")
            },
            {
                path: "/users/:id",
                element: <SeeDetails/>,
                loader: ({ params }) => {
                  return fetch(`http://localhost:9000/jobs/${params.id}`)
                }
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
])

export default router

