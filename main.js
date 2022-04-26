// const size = Number(prompt("enter size"));
const arr = [
	{ id: 1, img: "./pokemon/p1.png" },
	{ id: 2, img: "./pokemon/p2.png" },
	{ id: 3, img: "./pokemon/p3.png" },
	{ id: 4, img: "./pokemon/p4.png" },
	{ id: 5, img: "./pokemon/p5.png" },
	{ id: 6, img: "./pokemon/p6.png" },
	{ id: 7, img: "./pokemon/p7.png" },
	{ id: 8, img: "./pokemon/p8.png" },
	{ id: 9, img: "./pokemon/p9.png" },
	{ id: 10, img: "./pokemon/p10.png" },
	{ id: 11, img: "./pokemon/p11.png" },
	{ id: 12, img: "./pokemon/p12.png" },
	{ id: 13, img: "./pokemon/p13.png" },
	{ id: 14, img: "./pokemon/p14.png" },
	{ id: 15, img: "./pokemon/p15.png" },
	{ id: 16, img: "./pokemon/p16.png" },
	{ id: 17, img: "./pokemon/p17.png" },
	{ id: 18, img: "./pokemon/p18.png" },
	{ id: 19, img: "./pokemon/p19.png" },
	{ id: 20, img: "./pokemon/p20.png" },
	{ id: 21, img: "./pokemon/p21.png" },
	{ id: 22, img: "./pokemon/p22.png" },
	{ id: 23, img: "./pokemon/p23.png" },
	{ id: 24, img: "./pokemon/p24.png" },
	{ id: 25, img: "./pokemon/p25.png" },
	{ id: 26, img: "./pokemon/p26.png" },
	{ id: 27, img: "./pokemon/p27.png" },
	{ id: 28, img: "./pokemon/p28.png" },
	{ id: 29, img: "./pokemon/p29.png" },
	{ id: 30, img: "./pokemon/p30.png" },
];

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
		console.log(first);
		console.log(secend);
		let a = document.getElementById(id1);
		a.className = "face";
		a.src = "Pokemon-card-back.webp";

		let b = document.getElementById(id2);
		b.className = "face";
		b.src = "Pokemon-card-back.webp";

		console.log(a);
		console.log(b);
	}
	first = "";
	secend = "";
	return;
}
function returnImg(id) {
	for (x of arr) {
		if (id == x.id) {
			return x.img;
		}
	}
}
function creatCards(arr) {
	for (let pok of arr) {
		const card = document.createElement("div");
		const a = document.createElement("a");
		a.download = pok.img;
		const fimg = document.createElement("img");

		card.className = "Pokecard";
		card.style.cursor = "pointer";

		fimg.className = "face";
		fimg.src = "Pokemon-card-back.webp";
		fimg.id = pok.id;
		card.appendChild(fimg);
		board.appendChild(card);
		card.addEventListener("click", (e) => {
			console.log(e);
			if (fimg.className === "face" && (first === "" || secend === "")) {
				fimg.classList = "back";

				fimg.src = returnImg(e.target.id);
				if (first === "") {
					first = e.target.id;
				} else {
					secend = e.target.id;
					setTimeout(function () {
						chack(first, secend);
					}, 500);
				}
			}
		});
	}
}
// getCard(size);
const pokemon = [...arr, ...arr];
let first = "";
let secend = "";
shuffle(pokemon);
creatCards(pokemon);
