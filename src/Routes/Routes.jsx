import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import HomeDetails from "../components/HomeDetails/HomeDetails";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <HomeDetails></HomeDetails>,
            loader: () => fetch('https://chef-s-cuisine-server-lokman-hossain-mujahid.vercel.app/chefs')
        },
        {
            path: "chefs/:id",
            element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
            loader: () => fetch('https://chef-s-cuisine-server-lokman-hossain-mujahid.vercel.app/chefs')
        },
        {
            path: "/blog",
            element: <Blog></Blog>,
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        }
      ]
      
    },
  ]);

  export default router