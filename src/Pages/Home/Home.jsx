
import BannerImage from "../../images/banner.jpeg"
import {useLoaderData} from "react-router-dom";
import DonationAllCard from "../DonationAllCard/DonationAllCard";
import { useState } from "react";
const Home = () => {
    const donations= useLoaderData();
    // console.log(donations)
    const [searchValue, setSearchValue] = useState(""); 
    const handleSearchCategoryName = (e)=>{
        e.preventDefault();
        setSearchValue(e.target.name.value)
    }
    // console.log(searchValue)
    
    return (
        <div className="px-3">
             <div className="hero h-[400px]" style={{ backgroundImage: `url(${BannerImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="hero-overlay bg-opacity-70 bg-slate-200"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="flex flex-col">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>

                
                        <form onSubmit={handleSearchCategoryName}>
                        <input type="text" name="name" className="text-black outline-0 h-[50px] rounded-lg px-2 w-[300px]" placeholder="Search here...." />
                        <button className=" btn bg-[#FF444A] hover:bg-[#FF444A] text-white capitalize">Search</button>
                       
                        </form>
                            
                    </div>

                </div>
            </div>
            <DonationAllCard donations={donations} searchValue={searchValue}></DonationAllCard>
        </div>
    );
};

export default Home;