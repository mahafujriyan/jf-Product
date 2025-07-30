import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Components/Home/Home';
import ContactUs from '../Contact/ContactUs';
import SingUp from '../Pages/Auth/SingUp';
import LogIn from '../Pages/Auth/LogIn';
import CartPage from '../Pages/Cartpage/CartPage';
import BlogDetails from '../Pages/Blog/BlogDetails';
import Blogs from '../Pages/Blog/Blogs';


  
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout>

    </MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>
        },
        {
          path:'singUp',
          element:<SingUp></SingUp>
        },
        {
          path:'logIn',
          element:<LogIn></LogIn>
        },
        {
          path:'cart',
          element:<CartPage></CartPage>
        },
        {
          path:'blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'blog/:id',
          element:<BlogDetails></BlogDetails>
        }
    ]
  },
]);

export default router;