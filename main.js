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
function chack(id1, id2) {
	if (id1 !== id2) {
		console.log(secend);
		let a = document.getElementById(id1);
		a.className = "face";
		a.src = "Pokemon-card-back.webp";

		let b = document.getElementById(id2);
		b.className = "face";
		b.src = "Pokemon-card-back.webp";

		console.log(a);
		console.log(b);
		first = "";
		secend = "";
	}
}
function creatCards(arr) {
	for (let pok of arr) {
		const card = document.createElement("div");

		const fimg = document.createElement("img");

		card.className = "Pokecard";
		card.style.cursor = "pointer";

		fimg.className = "face";
		fimg.src = "Pokemon-card-back.webp";
		fimg.id = pok.id;
		card.appendChild(fimg);
		board.appendChild(card);
		card.addEventListener("click", (e) => {
			if (fimg.className === "face") {
				fimg.classList = "back";
				fimg.src = pok.img;
				if (first === "") {
					first = e.target.id;
				} else {
					secend = e.target.id;
					setTimeout(function () {
						chack(first, secend);
					}, 2000);
				}
			}
		});
	}
}
getCard(size);
const pokemon = [...arr, ...arr];
let first = "";
let secend = "";
shuffle(pokemon);
creatCards(pokemon);
