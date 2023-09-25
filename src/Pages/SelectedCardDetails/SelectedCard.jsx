import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";

const SelectedCard = () => {

    const [selectCard, setSelectCard] = useState({});

    const { id } = useParams();
    // console.log(id)
    const allCards = useLoaderData();
    // console.log(allCards)

    useEffect(() => {
        const findSelectedCard = allCards?.find(card => card.id == id)
        // console.log(findSelectedCard)
        setSelectCard(findSelectedCard);
    }, [id, allCards])
    // console.log(selectCard)


    return (
        <div>
          <CardDetails selectCard={selectCard}></CardDetails>
        </div>
    );
}

export default SelectedCard;