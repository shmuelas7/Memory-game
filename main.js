// const cards = ["a", "b", "c", "a", "b", "c"];
const pokemon = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const board = document.getElementById("board");

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

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
		let imgSrc = `${POKE_API}${padToThree(card.id)}.png`;

		const div = document.createElement("div");
		const name = document.createElement("h1");
		const img = document.createElement("img");
		const type = document.createElement("div");
		const exp = document.createElement("div");

		div.className = "Pokecard";
		div.style.cursor = "pointer";

		name.innerHTML = card.name;
		img.src = imgSrc;
		img.onmouseover = function () {
			this.style.height = "40%";
		};
		img.onmouseleave = function () {
			this.style.height = "60%";
		};
		type.className = "Pokecard-data";
		type.innerHTML = "Type: " + card.type;

		exp.className = "Pokecard-data";
		exp.innerHTML = "Power: " + card.base_experience;
		div.appendChild(name);
		div.appendChild(img);
		div.appendChild(type);
		div.appendChild(exp);
		board.appendChild(div);
	}
}
shuffle(pokemon);
creatCards(pokemon);
