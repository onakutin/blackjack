import { Deck } from "./deck";

export const gameStart = () => {
	let playerScore = 0;
	let compScore = 0;
	const cardsPlayerElm = document.querySelector(".table .table__cards-player");
	const cardsComputerElm = document.querySelector(
		".table .table__cards-computer"
	);
	const anounceResult = document.querySelector(
		".controls .player .anounce-result"
	);

	cardsPlayerElm.innerHTML = "";
	cardsComputerElm.innerHTML = "";

	// shuffle the cards
	const deck = new Deck();
	deck.shuffle();
	let newCard = deck.deal(); // generate the next card

	const compute_player_score = () => {
		if (Number(newCard.rank)) {
			playerScore += Number(newCard.rank);
		} else if (newCard.rank === "ace") {
			playerScore += 11;
		} else {
			playerScore += 10;
		}
		// console.log(playerScore);
	};

	const compute_comp_score = () => {
		if (Number(newCard.rank)) {
			compScore += Number(newCard.rank);
		} else if (newCard.rank === "ace") {
			compScore += 11;
		} else {
			compScore += 10;
		}
		// console.log(compScore);
	};

	const display_players_score = () => {
		const displayPlayersScore = document.querySelector(
			".controls .player .player-score"
		);
		displayPlayersScore.innerText = `Score: ${playerScore}`;
	};

	const display_comp_score = () => {
		const displayCompScore = document.querySelector(
			".controls .player .dealer-score"
		);
		displayCompScore.innerText = `Score: ${compScore}`;
	};

	const show_card_player = () => {
		cardsPlayerElm.innerHTML += `<div class="card face-${newCard.rank}-of-${newCard.suit}"></div>`;
		compute_player_score();
		newCard = deck.deal();
		display_players_score();
		if (playerScore > 21) {
			anounceResult.innerText = "BUST";
		} else if (playerScore === 21) {
			anounceResult.innerText = "CONGRATULATIONS";
		}
	};

	const show_card_computer = () => {
		cardsComputerElm.innerHTML += `<div class="card face-${newCard.rank}-of-${newCard.suit}"></div>`; // first computers card
		compute_comp_score();
		newCard = deck.deal();
		display_comp_score();
	};

	for (let i = 0; i < 2; i++) {
		// players first cards
		show_card_player();
	}

	show_card_computer();

	let flippedCard = newCard;
	cardsComputerElm.innerHTML += `<div class="face-revers card"></div>`; // second computers card
	compute_comp_score();
	newCard = deck.deal();

	///////////////// CLICK HIT
	const hitBtn = document.querySelector(".player-buttons__hit");
	hitBtn.addEventListener("click", (e) => {
		e.stopImmediatePropagation();
		show_card_player();
		console.log(playerScore);
	});

	////////////////// CLICK STAND
	const standBtn = document.querySelector(".player-buttons__stand");
	standBtn.addEventListener("click", (e) => {
		e.stopImmediatePropagation();
		const faceReverseCard = document.querySelector(".table .face-revers");
		faceReverseCard.className = `card face-${flippedCard.rank}-of-${flippedCard.suit}`;
		display_comp_score();
		for (let i = 0; compScore < 17; i++) {
			show_card_computer();
		}

		if (compScore > 21) {
			anounceResult.innerText = "CONGRATULATIONS";
		} else if (compScore === 21 || compScore > playerScore) {
			anounceResult.innerText = "YOU LOST";
		} else {
			anounceResult.innerText = "CONGRATULATIONS";
		}
	});
};
