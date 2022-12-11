let wheels = document.querySelectorAll(".wheel-img");
let spoiler = document.querySelector(".spoiler");
let spoilerFlag = true;

let wheel1Btn = document.querySelector(".wheel1");
let wheel2Btn = document.querySelector(".wheel2");
let wheel3Btn = document.querySelector(".wheel3");
let spoilerBtn = document.querySelector(".spoiler-btn");

function changeWheel1() {
	wheels.forEach((wheel) => {
		wheel.setAttribute("src", "./wheel1.png");
	});
}

function changeWheel2() {
	wheels.forEach((wheel) => {
		wheel.setAttribute("src", "./wheel2.png");
	});
}

function changeWheel3() {
	wheels.forEach((wheel) => {
		wheel.setAttribute("src", "./wheel3.png");
	});
}

function changeSpoiler() {
	spoilerFlag
		? ((spoiler.style.visibility = "visible"), (spoilerFlag = false))
		: ((spoiler.style.visibility = "hidden"), (spoilerFlag = true));
}

wheel1Btn.addEventListener("click", changeWheel1);
wheel2Btn.addEventListener("click", changeWheel2);
wheel3Btn.addEventListener("click", changeWheel3);
spoilerBtn.addEventListener("click", changeSpoiler);
