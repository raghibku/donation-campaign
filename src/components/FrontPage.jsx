import { useEffect, useState } from "react"
import Banner from "./Banner"
import { useNavigate } from "react-router-dom";



const FrontPage = () => {
    const navigate = useNavigate();
    const [preCards, setPreCards] = useState(null);
    const [cards, setCards] = useState(null);
    const [info, setInfo] = useState('')

    const handleGetData = (data) => {
        setInfo(data);
    }

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setPreCards(data));
    }, [])

    console.log(`info: ${info} `)

    useEffect(() => {
        if((preCards && info.toLowerCase()=='all')||(preCards && !info)){
            setCards(preCards);
        }
        else if ((preCards && info)&&(preCards && info.toLowerCase()!=='all')) {
            const newCards = preCards.filter(precard => precard.category.toLowerCase() == info.toLowerCase())
            setCards(newCards);
        }
    }, [info,preCards])


    return (
        <>
            <Banner handleGetData={handleGetData} />
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-10">
                    {
                        cards && cards.map((card) => {
                            return (
                                <div style={{ backgroundColor: card.cardBg }} onClick={() => { navigate(`/donation-details/${card.id}`) }} key={card.id} className={`flex flex-col justify-between items-start  w-[300px] h-[300px]`}>
                                    <img src={card.image} className="w-[300px] h-[194px]" alt="" />
                                    <div style={{ backgroundColor: card.categoryBg, color: card.textColor }} className={`px-2 py-1 font-semibold ml-4 `}>{card.category}</div>
                                    <h1 style={{ color: card.textColor }} className={` ml-4 font-semibold text-xl mb-2`}>{card.title}</h1>
                                </div>)
                        })
                    }

                </div>
            </div>
            
        </>
    )
}

export default FrontPage