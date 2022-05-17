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

function your_turn() {
	let player1 = document.getElementById("player1");
	let player2 = document.getElementById("player2");

	player2.className = turn ? "col-6 player" : "col-6 text-light bg-dark player";
	player1.className = !turn
		? "col-6 player"
		: "col-6 text-light bg-dark player";
}
function winer(player1, player2) {
	if (player1.count + player2.count == amount_of_cards) {
		alert("win");
	}
}
function chack(pok1, pok2) {
	let c1 = document.getElementById("count1");
	let c2 = document.getElementById("count2");

	if (pok1.img.src === pok2.img.src) {
		console.log("pp" + players);
		if (players) {
			if (turn) {
				pok1.count++;
				c1.innerText = pok1.count;
				winer(pok1, pok2);
			} else {
				pok2.count++;
				c2.innerText = pok2.count;
				winer(pok1, pok2);
			}
		}
		pok1.img = null;
		pok2.img = null;
		return;
	}
	if (players) {
		turn = turn ? false : true;
		your_turn();
	}
	pok1.img.className = "face";
	pok2.img.className = "face";
	pok1.card.className = "Pokecard img-back ";
	pok2.card.className = "Pokecard img-back";
	pok1.img = null;
	pok2.img = null;
	return;
}
function creatCards(pokemon) {
	for (let pok of pokemon) {
		const card = document.createElement("div");

		const fimg = document.createElement("img");

		card.className = "Pokecard img-back";
		card.style.cursor = "pointer";
		card.style.backgroundImage = "Pokemon-card-back.webp";

		fimg.className = "face";
		fimg.src = pok.img;

		card.appendChild(fimg);
		board.appendChild(card);
		card.onclick = function () {
			if (
				fimg.className === "face" &&
				(first.img === null || secend.img == null)
			) {
				console.log(card);
				card.className = "pokecard";
				fimg.classList = "back";
				if (first.img === null) {
					first.img = fimg;
					first.card = this;
					console.log("first " + first);
				} else {
					secend.img = fimg;
					secend.card = this;
					console.log("secend " + secend);
					setTimeout(function () {
						chack(first, secend);
					}, 1000);
				}
			}
		};
	}
}
function startGame() {
	Swal.fire({
		title: "Welcom To My Pokemon Memory Game",

		showCancelButton: true,
		cancelButtonText: `play alone`,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#3085d6",
		confirmButtonText: "play with frind",
		html:
			'<h6 for="range">Select the amount of cards</h6>' +
			'<input type="range" id="range" onchange="update_cards()" value="10"  min="2" max="60"  >' +
			'<label id="Crange"></label>',
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: "enter names",
				html:
					'<input id="swal-input1" placeholder="first name" class="swal2-input">' +
					'<input id="swal-input2" placeholder="secend name"  class="swal2-input">',
				focusConfirm: false,
				preConfirm: () => {
					let a = document.getElementById("swal-input1").value;
					let b = document.getElementById("swal-input2").value;
					createPlayres(a, b);
					players = true;
					return;
				},
			});
		}
		let arr1 = create_array_buy_num();
		const pokemon = [...arr1, ...arr1];
		shuffle(pokemon);
		creatCards(pokemon);
	});
}
function update_cards() {
	let range = document.getElementById("range");
	let count = document.getElementById("Crange");
	amount_of_cards =
		range.value % 2 ? Number(range.value) + 1 : Number(range.value);
	count.innerHTML = amount_of_cards;
}
function createPlayres(a, b) {
	let players = document.getElementById("players");
	let player1 = document.createElement("div");
	let player2 = document.createElement("div");
	let label1 = document.createElement("label");
	let label2 = document.createElement("label");

	name1 = document.createElement("h3");
	name2 = document.createElement("h3");

	name1.innerHTML = a + ": ";
	label1.innerHTML = 0;
	label1.id = "count1";
	name1.className = "name-one";
	player1.id = "player1";
	player1.className = "col-6 text-light bg-dark player";
	player1.append(name1, label1);

	label2.innerHTML = 0;
	label2.id = "count2";
	name2.innerHTML = b + ": ";
	name2.className = "name-one";
	player2.id = "player2";
	player2.className = "col-6";
	player2.append(name2, label2);

	players.append(player1, player2);
}
function create_array_buy_num() {
	return arr.slice(0, amount_of_cards);
}

let amount_of_cards = 4;

let players = null;
let turn = true;
let first = { img: null, card: null, count: 0 };
let secend = { img: null, card: null, count: 0 };
startGame();
