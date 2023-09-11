import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ContactMessage from "../../Pages/Dashboard/ContactMessage/ContactMessage";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import OurServices from "../../Pages/Home/OurServices/OurServices";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import OurRoom from "../../Pages/OurRoom/OurRoom";
import RoomCardDetails from "../../Pages/OurRoom/RoomCard/RoomCardDetails";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
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
          path: '/services',
          element: <OurServices></OurServices>
        },
        {
          path: '/roomcarddetails/:id',
          element: <RoomCardDetails></RoomCardDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/room/${params.id}`)
        },
        {
          path: '/contactUs',
          element: <ContactUs></ContactUs>
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
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement: <DisplayError></DisplayError>,
      children: [
        {
          path: '/dashboard/myBookings',
          element: <MyBooking></MyBooking>
        },
        {
          path: '/dashboard/allUser',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/contactMessage',
          element: <AdminRoute><ContactMessage></ContactMessage></AdminRoute>
        }
      ]
    }
])