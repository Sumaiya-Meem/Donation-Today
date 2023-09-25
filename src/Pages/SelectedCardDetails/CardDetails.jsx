/* eslint-disable react/prop-types */

const CardDetails = ({ selectCard }) => {
    const { picture, title, description, text_bg,price } = selectCard || {}
    return (
        <div>
            <div className="w-[600px] mx-auto mt-8">
                <div>
                    <div>
                        <img src={picture} alt="" className="w-[600px]" />
                    </div>
                    <div className="bg-[#16151566] ">
                       <button style={{backgroundColor:text_bg}} className="p-4 ml-6  mx-2 rounded-lg text-white ">Donate ${price}</button>
                    </div>
                </div>
                <h2 className="text-[#0B0B0B] font-semibold text-2xl">{title}</h2>
                <p className="text-[#0b0b0bb3]">{description}</p>

            </div>
        </div>
    );
};

export default CardDetails;