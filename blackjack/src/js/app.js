import { gameStart } from "./game-start";

///////////// RELOAD
document.addEventListener("DOMContentLoaded", () => {
	gameStart();
});

//////////////// CLICK NEW ROUND
const newGameBtn = document.querySelector(".new-game");
newGameBtn.addEventListener("click", () => {
	gameStart();
});
