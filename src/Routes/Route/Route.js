import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import OurRoom from "../../Pages/OurRoom/OurRoom";
import RoomCardDetails from "../../Pages/OurRoom/RoomCard/RoomCardDetails";
import BookingModal from "../../Shared/BookingModal/BookingModal";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
    },
    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: '/dashboard/myBookings',
          element: <MyBooking></MyBooking>
        }
      ]
    }
])