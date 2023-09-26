import { useEffect, useState } from "react";

const Statistics = () => {
    const [totalDonation,setTotalDonation] =useState([]);
    useEffect(()=>{
        const donationCard = JSON.parse(localStorage.getItem('card'));
        if(donationCard){
            setTotalDonation(donationCard);

        }     
        
    },[])
console.log(totalDonation.length)
    return (
        <div>
            <p>{totalDonation.length}</p>
        </div>
    );
};

export default Statistics;