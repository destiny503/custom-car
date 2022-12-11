// меню
let allMenu = document.querySelectorAll(".menu");
let mainMenu = document.querySelector(".menu.main");
let wheelsMenu = document.querySelector(".menu.wheels");
let spoilersMenu = document.querySelector(".menu.spoilers");

let mainBtns = document.querySelectorAll(".main-btn");
let wheelsBtn = document.querySelector(".wheels-btn");
let spoilersBtn = document.querySelector(".spoilers-btn");

function menuSwith() {
	switch (this.flag) {
		case 0:
			allMenu.forEach((i) => {
				i.style.visibility = "hidden";
			});
			mainMenu.style.visibility = "visible";
			break;
		case 1:
			allMenu.forEach((i) => {
				i.style.visibility = "hidden";
			});
			wheelsMenu.style.visibility = "visible";
			break;
		case 2:
			allMenu.forEach((i) => {
				i.style.visibility = "hidden";
			});
			spoilersMenu.style.visibility = "visible";
			break;
		default:
			alert("Ошибка переключения меню");
	}
}

mainBtns.forEach((btn) => {
	btn.addEventListener("click", { handleEvent: menuSwith, flag: 0 });
});
wheelsBtn.addEventListener("click", { handleEvent: menuSwith, flag: 1 });
spoilersBtn.addEventListener("click", { handleEvent: menuSwith, flag: 2 });

// колёса
let wheels = document.querySelectorAll(".wheel-img");
let wheel1Btn = document.querySelector(".wheel1");
let wheel2Btn = document.querySelector(".wheel2");
let wheel3Btn = document.querySelector(".wheel3");

function changeWheel1() {
	wheels.forEach((wheel) => {
		wheel.setAttribute("src", "./img/wheel1.png");
	});
}

function changeWheel2() {
	wheels.forEach((wheel) => {
		wheel.setAttribute("src", "./img/wheel2.png");
	});
}

function changeWheel3() {
	wheels.forEach((wheel) => {
		wheel.setAttribute("src", "./img/wheel3.png");
	});
}

wheel1Btn.addEventListener("click", changeWheel1);
wheel2Btn.addEventListener("click", changeWheel2);
wheel3Btn.addEventListener("click", changeWheel3);

// спойлер
let spoiler = document.querySelector(".spoiler");
let spoiler1Btn = document.querySelector(".spoiler1");
let spoiler2Btn = document.querySelector(".spoiler2");

function changeSpoiler1() {
	spoiler.style.visibility = "hidden";
}

function changeSpoiler2() {
	spoiler.style.visibility = "visible";
}

spoiler1Btn.addEventListener("click", changeSpoiler1);
spoiler2Btn.addEventListener("click", changeSpoiler2);
