import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCardToLS, getCardFromLS } from "../utilities/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationDetails = () => {
    const { id } = useParams();
    const [cards, setCards] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    useEffect(() => {
        if (cards) {
            const filteredCard = cards.find((card) => card.id == id)
            setSelectedCard(filteredCard);
            console.log(selectedCard);
        }
    }, [cards])
    const handleDonation = (sId) => {
        const selectedCardIds = getCardFromLS();
        if(!selectedCardIds.includes(sId)){
            addCardToLS(sId);
        
            toast.success("Donation Successfull. Thank You", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }else{
            toast.error("Already Donated");
        }
    }
    const divStyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))',
        backgroundSize: 'cover',
    };
    return (
        <div className="m2-20">
            {
                selectedCard != null ?
                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col justify-around items-center gap-8">
                            <div className="relative mx-auto w-full flex flex-col justify-center items-center">
                                <img src={selectedCard.image} className=" w-2/3 lg:w-2/4 " />
                                <div style={divStyle} className=" h-[80px]  w-2/3 lg:w-2/4 bottom-0 absolute">
                                    <button style={{ backgroundColor: selectedCard.textColor }} onClick={() => { handleDonation(selectedCard.id) }} className="px-6  py-3 rounded-md bottom-3 left-3 absolute font-semibold text-white ">Donate ${selectedCard.price}</button>
                                </div>
                                
                            </div>

                            <h1 className="text-2xl md:text-4xl font-semibold">{selectedCard.title}</h1>
                            <p className="w-2/3">
                                {selectedCard.Description}
                            </p>
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        {/* Same as */}
                        <ToastContainer />
                    </div> : <p>loading...</p>
            }

        </div>

    )
}

export default DonationDetails