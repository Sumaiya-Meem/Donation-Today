/* eslint-disable react/prop-types */

import SingleDonationCard from "../SingleDonationCard/SingleDonationCard";

const DonationAllCard = ({donations,searchValue}) => {
    // console.log(donations,searchValue)
    const searchDonations = searchValue ? donations.filter((donation) =>
              donation.category.toLowerCase().includes(searchValue.toLowerCase())) : donations;
    return (
        <div className="mt-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
              searchDonations?.map(donation => <SingleDonationCard key={donation.id} donation={donation}></SingleDonationCard>)  
            }
            </div>
            
        </div>
    );
};

export default DonationAllCard;