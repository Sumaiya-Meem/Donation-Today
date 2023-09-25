import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import SelectedCard from "../Pages/SelectedCardDetails/SelectedCard";

const createRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
              loader:() => fetch('/public/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element:<Statistics></Statistics>,
            },
            {
                path:"/donations/:id",
                element:<SelectedCard></SelectedCard>,
                loader:() => fetch('/public/donation.json')
            },
          ],
    },
]);

export default createRoute;