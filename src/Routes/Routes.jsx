
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
        path: "/",
        element: <App/>,
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
              element: <NotFound/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/users",
                element: <Users/>,
                loader: () => fetch("https://jsonplaceholder.typicode.com/users")
            },
            {
                path: "/users/:id",
                element: <SeeDetails/>,
                loader: ({ params }) => {
                  return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
                }
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router

