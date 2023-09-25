import Banner from "../../Components/Banner/Banner";
import {useLoaderData} from "react-router-dom";
import DonationAllCard from "../DonationAllCard/DonationAllCard";
const Home = () => {
    const donations= useLoaderData();
    // console.log(donations)
    return (
        <div className="px-3">
            <Banner></Banner>
            <DonationAllCard donations={donations}></DonationAllCard>
        </div>
    );
};

export default Home;