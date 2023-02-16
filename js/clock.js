let Name = prompt("Lütfen Adınızı Giriniz : ");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} ${Name}`;

let myClock = document.querySelector("#myClock");

let date = new Date();
let day = date.getDay();
let haurs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


myClock.innerHTML = ` ${haurs} : ${min} : ${sec} `
