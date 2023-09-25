import Banner from "../../Components/Banner/Banner";
import {useLoaderData} from "react-router-dom";
const Home = () => {
    const donations= useLoaderData();
    console.log(donations)
    return (
        <div>
            <Banner></Banner>
            <div className="py-6">
               Data length:{donations.length}
            </div>
        </div>
    );
};

export default Home;