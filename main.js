if (window.screen.width < 300) {
  alert("Неподдерживаемое устройство. Складные устройства надо раскрыть😏");
}

let perfect = document.querySelector(".perfect");
let car = document.querySelector(".car");
let wheel = document.querySelector(".wheel");
let wheelFront = document.querySelector(".front");

let allMenu = document.querySelectorAll(".menu");
let mainMenu = document.querySelector(".menu.main");
let wheelsMenu = document.querySelector(".menu.wheels");
let spoilersMenu = document.querySelector(".menu.spoilers");
let colorsMenu = document.querySelector(".menu.colors");
let springsMenu = document.querySelector(".menu.springs");

let carStatus = {
  wheels: true,
  spoilers: false,
  colors: false,
  springs: false,
};

// гейплей

function isPerfect() {
  if (Object.values(carStatus).every(Boolean)) {
    perfect.style.visibility = "visible";
  }
}

perfect.addEventListener('click', () => {
  if (!perfect.classList.contains("grow-animation")) {
    perfect.classList.add("grow-animation");
  }
  wheel.style.animation = "wheel-anim 2s infinite linear";
  wheelFront.style.animation = "wheel-anim 2s infinite linear";
  car.style.animation = "5s linear forwards drive";

  setTimeout(() => {confirm("Заново?") ? location.reload() : null}, 3000);
});

// меню

function openMenuByName(menuName) {
  allMenu.forEach(menu => {
    menu.style.visibility = "hidden";
  });

  const targetMenu = document.querySelector(`.menu.${menuName}`);
  if (targetMenu) {
    targetMenu.style.visibility = "visible";
  } else {
    console.warn(`Меню "${menuName}" не найдено`);
  }
}

document.querySelectorAll('[data-menu]').forEach(button => {
  button.addEventListener('click', () => {
    const menuName = button.dataset.menu;
    openMenuByName(menuName);
  });
});

document.querySelectorAll('.menu .button').forEach(button => {
  const type = button.dataset.type;
  const value = button.dataset.value;

  if (type && value) {
    button.addEventListener('click', () => handleChange(type, value));
  }
});

// подменю

function handleChange(type, value) {
  switch (type) {
    case 'wheel':
      document.querySelectorAll('.wheel-img').forEach(w => {
        w.src = `./img/wheel${value}.png`;
      });
      carStatus.wheels = value !== "1";
      break;

    case 'spoiler':
      const spoiler = document.querySelector('.spoiler-img');
      if (value === "1") {
        spoiler.src = "./img/spoiler1.png";
        carStatus.spoilers = false;
      } else {
        spoiler.src = `./img/spoiler${value}.png`;
        carStatus.spoilers = true;
      }
      spoiler.style.height = (value === "3") ? "33px" :
                             (value === "4") ? "50px" : "auto";
      break;

    case 'color':
      document.querySelector('.color-img').src = `./img/priora${value}.png`;
      carStatus.colors = value !== "1";
      break;
  }

  isPerfect();
}

// занижение

let springs = document.querySelectorAll(".wheel");
let shadow = document.querySelector(".shadow");
let springsSlider = document.querySelector("#springs-value");

function changeSprings() {
  let width = +window.screen.width;
  let val = +springsSlider.value;

  carStatus.springs = true;

  if (width >= 400) {
    springs.forEach(spring => spring.style.top = val + "px");
    shadow.style.top = val + 36 + "px";
  } else if (width >= 300) {
    springs.forEach(spring => spring.style.top = val - 15 + "px");
    shadow.style.top = val + 11 + "px";
  } else {
    alert("Неподдерживаемое устройство. Складное надо раскрыть😏");
  }

  isPerfect();
}

springsSlider.addEventListener("input", changeSprings);