import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import AboutUs from "../pages/about-us/AboutUs";
import COAs from "../pages/coas/COAs";
import FAQ from "../pages/faq/FAQ";
import ContactUs from "../pages/contact-us/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "coas",
        element: <COAs />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);
