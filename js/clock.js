let Name = prompt("Lütfen Adınızı Giriniz : ");

let myName = document.querySelector("#myName");

myName.innerHTML = `${myName.innerHTML} ${Name}`;


