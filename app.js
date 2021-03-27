var row3 = document.querySelector(".row3");
var checkIcn = document.getElementById("checkIcon");
var xIcn = document.getElementById("xIcon");

var i = 0;

checkIcn.addEventListener("click", () => {
	createNote();
});

xIcn.addEventListener("click", () => {
	typeNote();
});

function typeNote() {
	row3.classList.toggle("d-none");
}

function createNote() {
	var row2 = document.querySelector(".row2");

	var txtValue = document.querySelector("#txt").value;
	var div = document.createElement("div");
	var txt = document.createElement("h1");

	txt.innerHTML = txtValue;
	txt.setAttribute(
		"style",
		" margin-top:10px; font-size: 24px;box-shadow: 0 5px 10px 5px #7a7979;\
        width:300px; height:320px; padding: 1.5rem; overflow:hidden; "
	);

	txt.style.margin = margin();
	txt.style.transform = rotate();
	txt.style.background = color();
	div.appendChild(txt);

	row2.appendChild(div);

	div.addEventListener("mouseenter", () => {
		div.style.transition = "0.2s ease";
		div.style.transform = "scale(1.1)";
	});
	div.addEventListener("mouseleave", () => {
		div.style.transform = "scale(1)";
	});
	div.addEventListener("dblclick", () => {
		div.remove();
	});
	document.getElementById("txt").value = "";
}

function margin() {
	var margin = ["5px", "-3px", "20px", "10px", "-5px", "-15px"];
	return margin[Math.floor(Math.random() * margin.length)];
}

function rotate() {
	var rotate = [
		"rotate(2deg)",
		"rotate(-1deg)",
		"rotate(10deg)",
		"rotate(-3deg)",
		"rotate(-5deg)",
		"rotate(8deg)",
	];
	return rotate[Math.floor(Math.random() * rotate.length)];
}

function color() {
	var color = [
		"#fb4c1f",
		"#f9de59",
		"#a1ae25",
		"#f2b9cc",
		"#2b6684",
		"#eae100",
	];
	if (i > color.length - 1) i = 0;
	return color[i++];
}
