import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donationsItem,setDonationsItem] =useState([]);
    const [noDonation,setNoDonation]=useState(false);

    useEffect(()=>{
        const donationCard = JSON.parse(localStorage.getItem('card'));
        if(donationCard){
            setDonationsItem(donationCard);

        }
        else{
            setNoDonation('No Donation Found');
        }
        
        
    },[])
    // console.log(donationsItem);

    return (
        <div>
           {
            noDonation ? <p className="h-[80vh] flex justify-center items-center text-3xl text-red-500 font-medium">{noDonation}</p> 
            :
            <div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-2">
                    {
                        donationsItem.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
                    }
                </div>
                {donationsItem.length >= 4 && 
                 <div className="flex justify-center mt-4">
                    <button className="bg-[#009444] text-white capitalize p-4 rounded-lg font-medium">See All</button>
                

                </div>}

            </div>
           }
            
        </div>
    );
};

export default Donation;