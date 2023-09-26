import {Link} from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SingleDonationCard = ({donation}) => {
    const {id,picture,title,category,category_bg,card_bg,text_bg} = donation || {}
    // console.log(card_bg)
    return (
        <div>
            <Link to={`/donations/${id}`}>
            <div className="card card-compact h-[330px]" style={{backgroundColor:card_bg}}>
                <figure><img src={picture} alt="Shoes" className="h-[200px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title py-1 px-2 w-[100px] font-medium capitalize  rounded-md" style={{backgroundColor:category_bg,color:text_bg}}>{category}</h2>
                    <p style={{color:text_bg}} className="text-xl font-medium">{title}</p>
                </div>    
            </div>
            </Link>
        </div>
    );
};

export default SingleDonationCard;