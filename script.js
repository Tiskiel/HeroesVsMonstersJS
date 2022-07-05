// let timeT = setInterval(timeTick, 500);
// let tickCount = 0;
// let power = 0;
// let money = 0n;
// let reputation = 0n;  // the added n should make it of type BigInt which people might hit if they play a long time
// let monsterhp = 50n;
// let monstermax = 200n;
// let monsterhealth = 50n;
// let playerDam = 1;
// let deadmonsterflag = false;
// let messagetime = 0;
// let manualmessagetime = 0;
// let powermax = 20;
// let powertick = 0;
// let killtick = 0;
// let pwidth = 0;
// let testmess = "";
// let selfupgrades = 0;
// let heroupgrades = 0;
// let selfimage = "f";
// let firstshots = 5;
// let numOfHeroes = 12;
// let combinedDamage = 0;
// let newUpgrade = 0;

//JQuerry
// let $startBtn = $("#startBtn");
// $startBtn.click(function() {

// })

const startbtn = document.getElementById('startBtn');
const fond = document.getElementById('fond');

startbtn.addEventListener('click', () => {
    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    startbtn.style.display = 'none'
    titre.style.display = 'none'
})






let heroTurn = false;
let monsterTurn = false;
let monsterAttack;
let heroAttack;




// let startBtn = document.getElementById("startBtn");

// // Ce gestionnaire ne sera exécuté qu'une fois
// // lorsque le curseur se déplace sur la liste
// startBtn.addEventListener("mouseenter", function( event ) {
//   // on met l'accent sur la cible de mouseenter
//   event.target.style.color = "blue";

//   // on réinitialise la couleur après quelques instants
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);

// // Ce gestionnaire sera exécuté à chaque fois que le curseur
// // se déplacera sur un autre élément de la liste
// startBtn.addEventListener("mouseover", function( event ) {
//   // on met l'accent sur la cible de mouseover
//   event.target.style.color = "orange";

//   // on réinitialise la couleur après quelques instants
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);









