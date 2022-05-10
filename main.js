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
	// { id: 11, img: "./pokemon/p11.png" },
	// { id: 12, img: "./pokemon/p12.png" },
	// { id: 13, img: "./pokemon/p13.png" },
	// { id: 14, img: "./pokemon/p14.png" },
	// { id: 15, img: "./pokemon/p15.png" },
	// { id: 16, img: "./pokemon/p16.png" },
	// { id: 17, img: "./pokemon/p17.png" },
	// { id: 18, img: "./pokemon/p18.png" },
	// { id: 19, img: "./pokemon/p19.png" },
	// { id: 20, img: "./pokemon/p20.png" },
	// { id: 21, img: "./pokemon/p21.png" },
	// { id: 22, img: "./pokemon/p22.png" },
	// { id: 23, img: "./pokemon/p23.png" },
	// { id: 24, img: "./pokemon/p24.png" },
	// { id: 25, img: "./pokemon/p25.png" },
	// { id: 26, img: "./pokemon/p26.png" },
	// { id: 27, img: "./pokemon/p27.png" },
	// { id: 28, img: "./pokemon/p28.png" },
	// { id: 29, img: "./pokemon/p29.png" },
	// { id: 30, img: "./pokemon/p30.png" },
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
function getImg(id) {
	let a = document.getElementsByTagName("img");
	let arr = [...a];
	let res = arr.find((v) => v.id == id);
	return res;
}
function chack(id1, id2) {
	if (id1 === id2) {
		count++;
		first = "";
		secend = "";
		console("match");
		return;
	}
	console.log(first);
	console.log(secend);

	let a = getImg(first);
	console.log(a);
	a.className = "face";
	a.src = "Pokemon-card-back.webp";
	console.log("replace a", a);

	let b = getImg(secend);
	b.className = "face";
	b.src = "Pokemon-card-back.webp";
	console.log("replace b", b);
	first = "";
	secend = "";
	console.log(`first:${first}  secen ${secend}`);
	return;
}
function returnImg(id) {
	for (x of arr) {
		if (id == x.id) {
			return x.img;
		}
	}
}
function creatCards() {
	for (let pok of pokemon) {
		const card = document.createElement("div");

		const fimg = document.createElement("img");

		card.className = "Pokecard";
		card.style.cursor = "pointer";
		card.id = pok.id;

		fimg.className = "face";
		fimg.src = "Pokemon-card-back.webp";
		fimg.id = pok.id;
		card.appendChild(fimg);
		board.appendChild(card);
		card.onclick = function () {
			console.log(this);
			if (fimg.className === "face" && (first === "" || secend === "")) {
				fimg.classList = "back";

				fimg.src = returnImg(this.id);
				if (first === "") {
					first = this.id;
					console.log("first " + first);
				} else {
					secend = this.id;
					console.log("secend " + secend);
					setTimeout(function () {
						chack(first, secend);
					}, 500);
				}
			}
		};
	}
}
function JSalert() {
	Swal.fire({
		title: "welcom to pokemon memory game",

		showCancelButton: true,
		cancelButtonText: `play alone`,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#3085d6",
		confirmButtonText: "play with frind",
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
					return true;
				},
			});
		}
	});
}
function createPlayres(a, b) {
	let player = document.getElementById("players");
	name1 = document.createElement("h3");
	name2 = document.createElement("h3");

	name1.innerHTML = a + " :0";
	name1.className = "name-one";

	name2.innerHTML = b + " :0";
	name2.className = "name-one";
	console.log(name1);
	player.append(name1, name2);
	console.log(player);
}

let players = JSalert();
console.log(players);
let count = 0;
const pokemon = [...arr, ...arr];
let first = "";
let secend = "";
shuffle(pokemon);
creatCards();
console.log(pokemon);
