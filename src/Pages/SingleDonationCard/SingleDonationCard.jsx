import {Link} from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SingleDonationCard = ({donation}) => {
    const {id,picture,title,description,category_bg,card_bg,text_bg} = donation || {}
    // console.log(card_bg)
    return (
        <div>
            <Link to={`/donations/${id}`}>
            <div className="card card-compact h-[370px]" style={{backgroundColor:card_bg}}>
                <figure><img src={picture} alt="Shoes" className="h-[200px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title px-2 w-[100px] font-medium capitalize  rounded-md" style={{backgroundColor:category_bg,color:text_bg}}>{title}</h2>
                    <p style={{color:text_bg}} className="text-xl font-medium">{description.slice(0,24)}</p>
                </div>    
            </div>
            </Link>
        </div>
    );
};

export default SingleDonationCard;