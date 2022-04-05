const cards = ["a", "b", "c", "a", "b", "c"];

const board = document.getElementById("board");

for (let card of cards) {
	const elemet = document.createElement("div");
	elemet.innerHTML = card;
	elemet.className = "card";
	board.appendChild(elemet);
}
