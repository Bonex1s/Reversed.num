let myName = "MOLODEC, тольок наоборот";
let nameMy = "CEDOLOM";
let myName2 = "ПОЛУЧИЛОСЬ!";
let myName3 = "NEPRAVILNO!";
let myName21 = "НЕ ПРАВИЛЬНО!";
let numberOne = 58;
let numberTwo = 10;

const clickBtn = document.getElementById("mybtn");
const inputBtn = document.getElementById("input1");
const stringOne = document.getElementById("paragraph");

const clickBtn2 = document.getElementById("mybtn2");
const inputBtn2 = document.getElementById("input12");
const stringOne2 = document.getElementById("paragraph2");

function open(a) {
  a > 100
    ? (stringOne.style.color = "green")
    : (stringOne.style.color = "blue");
  stringOne.textContent = a;
}

function codeOne(b) {
  b == numberOne ? alert(myName) : open(b);
}

clickBtn.onclick = function () {
  const result = Number(inputBtn.value) + Number(inputBtn.value);
  codeOne(result);
};
// ==================

function open2(a) {
  a == nameMy ? alert(myName2) : alert(myName21);
  stringOne2.textContent = a;
}

clickBtn2.onclick = function () {
  const fullName = inputBtn2.value;
  open2(fullName);
};
