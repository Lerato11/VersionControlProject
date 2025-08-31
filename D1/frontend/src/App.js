import React from "react";
import ReactDOM from "react-dom";

import {Home} from "./pages/Home";

import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, } from "react-router-dom";


import { Project } from "./components/Project";
import { ProfilePage } from "./pages/ProfilePage"
import {ProjectPage} from "./pages/ProjectPage"
import { SplashWelcome } from "./components/SplashWelcome";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Oops! Something went wrong.</div>
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  }, 
  {
    path: "/welcome",
    element: <SplashWelcome />,
  }
]);


function App() {
    return (
        // <BrowserRouter>
        //      <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/profile" element={<ProfilePage />} />
        //         <Route path="/project" element={<IndivProject />} />
        //      </Routes>
        // </BrowserRouter>
        <RouterProvider router={router} />

    );
}


export {App};