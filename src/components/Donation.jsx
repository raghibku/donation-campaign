import { useEffect, useState } from "react"
import { getCardFromLS } from "../utilities/LocalStorage";


const Donation = () => {
  const [cards, setCards] = useState(null);
  const [displayCards, setDisplayCards] = useState(null)
  const [visibility, setVisibility] = useState('hidden');
  const [btnClicked, setBtnClicked] = useState(false);
  const selectedCardIds = getCardFromLS();

  const handleBtnClick = () => {
    setBtnClicked(true);
    setVisibility('hidden');
  }

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, [])

  useEffect(() => {
    if (cards) {
      const donatedCards = cards.filter(card => selectedCardIds.includes(card.id));
      if(donatedCards.length>4 && !btnClicked){
        setDisplayCards(donatedCards.slice(0,4))
        setVisibility('block')
      }else{
        setDisplayCards(donatedCards);
      }
      console.log(displayCards);
    }
  }, [cards,btnClicked])


  return (
    <div className="mx-10 my-24 flex flex-col justify-center items-center gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {
          displayCards != null ? displayCards.map((card) => {
            return (
              <div key={card.id} style={{ backgroundColor: card.cardBg }} className="flex justify-start items-center gap-4">
                <div className="left">
                  <img src={card.image} className="h-[150px] w-[150px] md:h-[200px] md:w-[200px]" alt="" />
                </div>
                <div className="right flex flex-col justify-around items-start md:gap-3">
                  <div style={{ backgroundColor: card.categoryBg, color: card.textColor }} className={`px-2 py-1  font-semibold`}>{card.category}</div>
                  <h1 className="text-lg md:text-2xl font-semibold">{card.title}</h1>
                  <h1 style={{ color: card.textColor }} className="text-lg font-bold">${card.price}</h1>
                  <button style={{ backgroundColor: card.textColor }} className=" text-white px-4 py-2 rounded-md text-xl"> View Details</button>
                </div>
              </div>
            )
          }) : <p>loading....</p>
        }
      </div>
      <button onClick={handleBtnClick} className= {`${visibility} px-4 py-2 bg-green-600 text-white rounded-md`}>See All</button>
    </div>
  )
}

export default Donation