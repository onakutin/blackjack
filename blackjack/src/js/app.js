import { show_card_player } from "./show-card-player";
import { show_card_computer } from './show-card-computer';
import { shuffle } from "./shuffle";

const cardsElm = document.querySelector('.table .cards');

///////////// RELOAD
document.addEventListener('DOMContentLoaded', () => {
  cardsElm.innerHTML = '';
  shuffle();
  show_card_player();
  show_card_computer();
  }
);

//////////////// CLICK NEW ROUND
const newGameBtn = document.querySelector('.new-game');
newGameBtn.addEventListener('click', () => {
  cardsElm.innerHTML = '';
  const deck = shuffle();
  show_card_player();
});

///////////////// CLICK HIT
const hitBtn = document.querySelector('.player-buttons__hit');
hitBtn.addEventListener('click', () => {
  show_card_player();
})

////////////////// CLICK STAND
const standBtn = document.querySelector('.player-buttons__stand');
standBtn.addEventListener('click', () => {
  show_card_computer();
})