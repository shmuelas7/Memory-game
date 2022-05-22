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

function winerAlert(name) {
	Swal.fire({
		title: "the winer is " + name + "!!",
		imageUrl: "./files/winner.jpg",
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: "Custom image",
	});
}
function winer() {
	let score = 0;
	let max = 0;
	let player = null;
	for (x of arrPlayers) {
		if (max < x.count) {
			max = x.count;
			player = x;
		}
		score += x.count;
	}
	score == amount_of_cards ? winerAlert(player.name) : null;
}
function chack(player) {
	if (player.img1.src === player.img2.src) {
		var audio = new Audio("./files/Applause.mp3");
		audio.play();
		player.count++;

		player.img1 = null;
		player.img2 = null;
		updateCount(player);
		winer();

		return;
	}
	player.img1.className = "face";
	player.img2.className = "face";
	player.card1.className = "Pokecard img-back ";
	player.card2.className = "Pokecard img-back";
	player.img1 = null;
	player.img2 = null;

	updateTurn(player);

	return;
}
function updateTurn(player) {
	chackTurn++;
	chackTurn = chackTurn == numberOfPlayrs ? 0 : chackTurn;
	player.divName.className = "col-2 text-center player";
	arrPlayers[chackTurn].divName.className =
		"col-2 text-center text-light bg-dark player";
}
function updateCount(player) {
	player.labelCount.innerHTML = player.count;
}
function creatCards(pokemon) {
	for (let pok of pokemon) {
		const card = document.createElement("div");

		const fimg = document.createElement("img");

		card.className = "Pokecard img-back";
		card.style.cursor = "pointer";
		card.style.backgroundImage = "./Pokemon-card-back.webp";

		fimg.className = "face";
		fimg.src = pok.img;

		card.appendChild(fimg);
		board.appendChild(card);
		card.onclick = function () {
			console.log(chackTurn, numberOfPlayrs);
			let player = arrPlayers[chackTurn];

			if (
				fimg.className === "face" &&
				(player.img1 === null || player.img2 == null)
			) {
				card.className = "pokecard";
				fimg.classList = "back";
				if (player.img1 === null) {
					player.img1 = fimg;
					player.card1 = this;
				} else {
					player.img2 = fimg;
					player.card2 = this;
					setTimeout(function () {
						chack(player);
					}, 1000);
				}
			}
		};
	}
}
function getValueSelect() {
	let select = document.getElementById("numberOfPlayres");
	numberOfPlayrs = select.options[select.selectedIndex].value;
}
function createInputPlayrs() {
	let input = "";
	for (i = 1; i <= numberOfPlayrs; i++) {
		input += `<input id="name${i}"placeholder="name ${i} " class="swal2-input">`;
	}
	return input;
}
function pushPlayrsToArray() {
	for (i = 1; i <= numberOfPlayrs; i++) {
		let playerName = document.getElementById("name" + i).value;
		let player = new CreatePlayre(playerName);
		arrPlayers.push(player);
	}
}
async function startGame() {
	await Swal.fire({
		title: "Welcom To My Pokemon Memory Game",
		confirmButtonColor: "#3085d6",
		confirmButtonText: "Continue to the game",
		html:
			'<h6 for="range">Select the amount of cards</h6>' +
			'<input type="range" id="range" onchange="update_cards()" value="10"  min="2" max="60"  >' +
			'<label id="Crange">8</label>' +
			"</br>" +
			`<select name="players" id="numberOfPlayres" onchange="getValueSelect()">
				<option value="1">--Number of players--</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>`,
	}).then((result) => {
		getValueSelect();
		let input = createInputPlayrs();

		Swal.fire({
			title: "Enter Names",
			html: input,
			confirmButtonText: "Start Game",
			preConfirm: () => {
				pushPlayrsToArray();
				createHeaderForEechPlayer();
			},
		});
		let arr1 = createNumberOfCurds();
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
function createHeaderForEechPlayer() {
	let players = document.getElementById("players");
	arrPlayers.forEach((v, i) => {
		let div = document.createElement("div");
		let label = document.createElement("label");
		let h3 = document.createElement("h5");
		h3.innerText = v.name + ": ";
		v.labelCount = label;
		v.divName = div;
		label.innerText = v.count;
		div.id = i + v.name;
		div.className =
			i == 0
				? `col-2 text-center text-light bg-dark player`
				: `col-2 text-center player`;
		div.append(h3, label);
		players.append(div);
	});
}
function createNumberOfCurds() {
	return arr.slice(0, amount_of_cards);
}
function CreatePlayre(name, count = 0) {
	this.name = name;
	this.card1 = null;
	this.card2 = null;
	this.count = count;
	this.img1 = null;
	this.img2 = null;
	this.idCount = null;
	this.divName = null;
}

const board = document.getElementById("board");
let arrPlayers = [];
let numberOfPlayrs = 1;
let amount_of_cards = 4;
let chackTurn = 0;
startGame();
