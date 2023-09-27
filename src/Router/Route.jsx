import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import SelectedCard from "../Pages/SelectedCardDetails/SelectedCard";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const createRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
              loader:() => fetch('/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element:<Statistics></Statistics>,
                loader:() => fetch('/donation.json')
            },
            {
                path:"/donations/:id",
                element:<SelectedCard></SelectedCard>,
                loader:() => fetch('/donation.json')
            },
          ],
    },
]);

export default createRoute;