import BannerImage from "../../images/banner.jpeg"
const Banner = () => {
    return (
        <div className="">
            <div className="hero h-[400px]" style={{ backgroundImage: `url(${BannerImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="hero-overlay bg-opacity-70 bg-slate-200"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="flex flex-col">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>

                        <div className="">
                            <input type="text" className="h-[50px] rounded-lg px-2 w-[300px]" placeholder="search" />
                            <button className=" btn bg-[#FF444A] hover:bg-[#FF444A] text-white capitalize">Search</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;