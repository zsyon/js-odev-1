let Name = prompt("Lütfen Adınızı Giriniz : ");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} ${Name}`;

let myClock = document.querySelector("#myClock");

let date = new Date();
let day = date.getDay();
let haurs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let dayString =""


switch(day){
  case 1 :
    dayString = "Pazartesi"
  break;
  case 2 :
    dayString = "Salı"
  break;
  case 3 :
    dayString = "Çarşamba"
  break;
  case 4 :
    dayString = "Perşembe"
  break;
  case 5 :
    dayString = "Cuma"
  break;
  case 6 :
    dayString = "Cumartesi"
  break;
  case 7 :
    dayString = "Pazar"
  break;

}

myClock.innerHTML = ` ${haurs} : ${min} : ${sec}   ${dayString}`
