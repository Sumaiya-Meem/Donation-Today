import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";

const Statistics = () => {

    const total_donation = useLoaderData();

    const [myDonation, setMyDonation] = useState([]);
    useEffect(() => {
        const donationCard = JSON.parse(localStorage.getItem('card'));
        if (donationCard) {
            setMyDonation(donationCard);
        }

    }, [])
    // console.log(myDonation.length)

    const a = parseInt((myDonation.length / total_donation.length) * 100);
    const data = [
        ["Donation", "Popularity"],
        ["Total Donation", 100 - a],
        ["Your Donation", a],
    ];

    const options = {
        legend: "none",
        colors: ["#FF444A","#00C49F"],
    };
    return (
        <div>
            <div className="flex justify-center">
                <Chart
                    chartType="PieChart"
                    data={data}
                    width={"100%"}
                    height={"400px"}
                    options={options}
                />

            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex items-center gap-2">
                    <p>Your Donation</p>
                    <div className="h-[12px] w-[120px] bg-[#00C49F]"></div>
                </div>
                <div className="flex items-center gap-2">
                    <p>Total Donation</p>
                    <div className="h-[12px] w-[120px] bg-[#FF444A]"></div>
                </div>
            </div>
        </div>
    );

};

export default Statistics;