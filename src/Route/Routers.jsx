import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Components/Home/Home';


  
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout>

    </MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        }
    ]
  },
]);

export default router;