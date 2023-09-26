/* eslint-disable react/prop-types */

const DonationCard = ({ donationCard }) => {
    // console.log(donationCard);
    const {  picture, title, category_bg,category, card_bg, text_bg ,price} = donationCard || {}
    return (
        <div>
            <div className="card card-side" style={{backgroundColor:card_bg}}>
                <figure><img src={picture}  alt="Movie" className="h-[200px]"/></figure>
                <div className="card-body">
                <h2 className="card-title py-1 px-2 w-[100px] font-medium capitalize  rounded-md" style={{backgroundColor:category_bg,color:text_bg}}>{category}</h2>
                <p  className="text-xl  font-medium text-black">{title}</p>
                <p style={{color:text_bg}} className="text-xl font-medium">${price}</p>
                    <div className="card-actions">
                        <button className="btn text-white capitalize text-lg" style={{backgroundColor:text_bg}}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;