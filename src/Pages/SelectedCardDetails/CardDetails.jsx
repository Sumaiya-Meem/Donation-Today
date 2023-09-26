/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = ({ selectCard }) => {
    const {id, picture, title, description, text_bg,price } = selectCard || {}

    const handleDonation = ()=>{
        // console.log(selectCard)
        const addDonationArray = [];
        const donationCard = JSON.parse(localStorage.getItem('card'))
        // console.log(donationCard);
        if(!donationCard){
                 addDonationArray.push(selectCard);
                 localStorage.setItem('card',JSON.stringify(addDonationArray))
                 toast.success("Successfully donated",{
                    position: "top-center",
                })
                
        }
        else{
            const isDonationCardExist = donationCard.find(card=> card.id == id)
            if(!isDonationCardExist){
                addDonationArray.push(...donationCard,selectCard);
                localStorage.setItem('card',JSON.stringify(addDonationArray))  
                toast.success("Successfully donated",{
                    position: "top-center",
                })
            }
            else{
                toast.warn("Already donated",{
                    position: "top-center",
                })
            }
                   
        }
     
        


        
        
    }

    return (
        <div className="w-[450px] md:w-[550px]  mx-auto mt-4">
                    <div  className="relative">
                        <img src={picture} alt="" className="w-full" />
                        <div className="bg-[#12111180] absolute h-20 bottom-0 opacity-0.9 w-full">
                       <button onClick={handleDonation} style={{backgroundColor:text_bg}} className="p-3  mt-5  mx-3 rounded-lg text-white ">Donate ${price}</button>
                       </div>
                    </div>
            <h2 className="text-[#0B0B0B] font-semibold text-2xl ">{title}</h2>
            <p className="text-[#0b0b0bb3]">{description}</p>
            <ToastContainer />
    </div>

    );
};

export default CardDetails;