import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import OurRoom from "../../Pages/OurRoom/OurRoom";
import RoomCardDetails from "../../Pages/OurRoom/RoomCard/RoomCardDetails";
import Main from "../../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/ourRoom',
          element: <OurRoom></OurRoom>
        },
        {
          path: '/roomcarddetails/:id',
          element: <RoomCardDetails></RoomCardDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/room/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    }
])