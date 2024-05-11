// игра

if (window.screen.width < 300) {
  alert("Неподдерживаемое устройство. Складные устройства надо раскрыть😏");
}

let perfect = document.querySelector(".perfect");
let car = document.querySelector(".car");
let wheel = document.querySelector(".wheel");
let wheelFront = document.querySelector(".front");
let scWheels = false;
let scSpoilers = false;
let scColors = false;
let scSprings = false;

// wheel.style.transfom = "rotate(90deg)";

let checkScore = setInterval(() => {
  if (scWheels && scSpoilers && scColors && scSprings) {
    perfect.style.visibility = "visible";
    clearInterval(checkScore);
    wheel.style.animation = "wheel-anim 2s infinite linear";
    wheelFront.style.animation = "wheel-anim 2s infinite linear";
    car.style.animation = "5s linear forwards drive";
  }
}, 1000);

// меню

let allMenu = document.querySelectorAll(".menu");
let mainMenu = document.querySelector(".menu.main");
let wheelsMenu = document.querySelector(".menu.wheels");
let spoilersMenu = document.querySelector(".menu.spoilers");
let colorsMenu = document.querySelector(".menu.colors");
let springsMenu = document.querySelector(".menu.springs");

let mainBtns = document.querySelectorAll(".main-btn");
let wheelsBtn = document.querySelector(".wheels-btn");
let spoilersBtn = document.querySelector(".spoilers-btn");
let colorsBtn = document.querySelector(".colors-btn");
let springsBtn = document.querySelector(".springs-btn");

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
    case 3:
      allMenu.forEach((i) => {
        i.style.visibility = "hidden";
      });
      colorsMenu.style.visibility = "visible";
      break;
    case 4:
      allMenu.forEach((i) => {
        i.style.visibility = "hidden";
      });
      springsMenu.style.visibility = "visible";
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
colorsBtn.addEventListener("click", { handleEvent: menuSwith, flag: 3 });
springsBtn.addEventListener("click", { handleEvent: menuSwith, flag: 4 });

// колёса

let wheels = document.querySelectorAll(".wheel-img");
let wheel1Btn = document.querySelector(".wheel1");
let wheel2Btn = document.querySelector(".wheel2");
let wheel3Btn = document.querySelector(".wheel3");

function changeWheel1() {
  wheels.forEach((wheel) => {
    wheel.setAttribute("src", "./img/wheel1.png");
    scWheels = false;
  });
}

function changeWheel2() {
  wheels.forEach((wheel) => {
    wheel.setAttribute("src", "./img/wheel2.png");
    scWheels = true;
  });
}

function changeWheel3() {
  wheels.forEach((wheel) => {
    wheel.setAttribute("src", "./img/wheel3.png");
    scWheels = true;
  });
}

wheel1Btn.addEventListener("click", changeWheel1);
wheel2Btn.addEventListener("click", changeWheel2);
wheel3Btn.addEventListener("click", changeWheel3);

// спойлеры

let spoiler = document.querySelector(".spoiler-img");
let spoiler1Btn = document.querySelector(".spoiler1");
let spoiler2Btn = document.querySelector(".spoiler2");
let spoiler3Btn = document.querySelector(".spoiler3");

function changeSpoiler1() {
  spoiler.setAttribute("src", "./img/spoiler1.png");
  scSpoilers = false;
}

function changeSpoiler2() {
  spoiler.setAttribute("src", "./img/spoiler2.png");
  scSpoilers = true;
}

function changeSpoiler3() {
  spoiler.setAttribute("src", "./img/spoiler3.png");
  spoiler.style.height = "33px";
  scSpoilers = true;
}

spoiler1Btn.addEventListener("click", changeSpoiler1);
spoiler2Btn.addEventListener("click", changeSpoiler2);
spoiler3Btn.addEventListener("click", changeSpoiler3);

// цвета

let color = document.querySelector(".color-img");
let color1Btn = document.querySelector(".color1");
let color2Btn = document.querySelector(".color2");
let color3Btn = document.querySelector(".color3");

function changeColor1() {
  color.setAttribute("src", "./img/priora.png");
  scColors = false;
}

function changeColor2() {
  color.setAttribute("src", "./img/priora-yellow.png");
  scColors = true;
}

function changeColor3() {
  color.setAttribute("src", "./img/priora-pink.png");
  scColors = true;
}

color1Btn.addEventListener("click", changeColor1);
color2Btn.addEventListener("click", changeColor2);
color3Btn.addEventListener("click", changeColor3);

// занижение

let springs = document.querySelectorAll(".wheel");
let shadow = document.querySelector(".shadow");
let springsSlider = document.querySelector("#springs-value");

function changeSprings() {
  let width = +window.screen.width;

  if (springsSlider.value == 62 || springsSlider.value == 80) {
    scSprings = true;
  }

  if (width >= 400) {
    for (const spring of springs) {
      spring.style.top = this.value + "px";
    }
    shadow.style.top = +this.value + 36 + "px";
  } else if (width >= 300) {
    for (const spring of springs) {
      spring.style.top = +this.value - 15 + "px";
    }
    shadow.style.top = +this.value + 11 + "px";
  } else {
    alert("Неподдерживаемое устройство. Складное надо раскрыть😏");
  }
}

springsSlider.addEventListener("input", changeSprings);
