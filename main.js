const size = Number(prompt("enter size"));
const arr = [];
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
function getCard(size) {
	for (let i = 1; i <= size; i++) {
		let imgSrc = `${POKE_API}${padToThree(i)}.png`;
		arr.push({ id: i, img: imgSrc });
	}
}

const board = document.getElementById("board");

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
}
function creatCards(arr) {
	for (let card of arr) {
		const div = document.createElement("div");
		const fimg = document.createElement("img");
		const bimg = document.createElement("img");
		div.className = "Pokecard";
		div.style.cursor = "pointer";
		console.log(card.id);
		div.id = card.id;
		div.onclick = "flip";
		// bimg.src = imgSrc;
		bimg.className = "back";
		console.log(card.img);
		fimg.src = card.img;
		fimg.className = "back";

		div.appendChild(fimg);

		board.appendChild(div);
	}
}
getCard(size);
const pokemon = [...arr, ...arr];
shuffle(pokemon);
creatCards(pokemon);
