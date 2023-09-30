export const show_card_computer = () => {
    const cardsElm = document.querySelector('.table .cards');
    const card = deck.cards.shift();                // get the first card from the deck array
    
    cardsElm.innerHTML += `<div class="card face-${card.rank}-of-${card.suit}"></div>`
}