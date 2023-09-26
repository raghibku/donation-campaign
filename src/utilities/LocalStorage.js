const getCardFromLS = () => {
    const selectedCard = localStorage.getItem('card');
    if(selectedCard){
        const selectedCardParsed = JSON.parse(selectedCard);
        return selectedCardParsed;
    }
    return [];
}

const addCardToLS=(id)=>{
    const savedCards = getCardFromLS();
    savedCards.push(id);
    const savedCardsStringified = JSON.stringify(savedCards);
    localStorage.setItem('card',savedCardsStringified)
}
export {getCardFromLS,addCardToLS}