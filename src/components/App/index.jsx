import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Home } from "../Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Reservation } from "../Reservation";

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/reservation", element: <Reservation /> },
]);
