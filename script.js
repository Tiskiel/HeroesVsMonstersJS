// StartBtn
const startbtn = document.getElementById('startBtn');
const fond = document.getElementById('fond');
const btnHuman = document.getElementById('choixHumain');
const btnNain = document.getElementById('choixNain');
const imgNain = document.getElementById('nain');
const imgHumain = document.getElementById('humain');
const gameDiv = document.getElementById('gameDiv');
const divBtn = document.getElementById('btn');
const imgMap = document.getElementById('divMap');
const pWelcome = document.getElementById('pWelcome')
const humainDiv = document.getElementById('humainDiv');
const nainDiv = document.getElementById('nainDiv');
const dragonDiv = document.getElementById('dragonDiv')
let img = document.createElement("img");


startbtn.addEventListener('click', () => 
{
    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    startbtn.style.display = 'none';
    humainDiv.style.display = 'none';
    nainDiv.style.display = 'none';
    dragonDiv.style.display = 'none';
})


// ReturnBtn
const returnbtn = document.getElementById('returnBtn');

returnbtn.addEventListener('click', () => 
{
    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 0%, 0 0%)";
    startbtn.style.display = 'block';
    // btnHuman.style.display ='block';
    // btnNain.style.display = 'block';
})


// btn choixHumain
btnHuman.addEventListener('click', () =>
{

    btnHuman.style.display = 'none';
    btnNain.style.display = 'none';
    pWelcome.style.display = 'none';
    imgMap.classList.add('map');
    humainDiv.style.display = 'block';
    dragonDiv.style.display = 'block';
    // img.src = "image/humain.png";
    // imgMap.appendChild('img');
    // divBtn.classList.toggle('.align')
    // gameDiv.appendChild(img);
    //gameDiv.classList.add('.gameHuman');
})


// btn choixNain
btnNain.addEventListener('click', () =>
{
    btnNain.style.display = 'none';
    btnNain.style.display = 'none';
    pWelcome.style.display = 'none';
    imgMap.classList.add('map');
    nainDiv.style.display = 'block';
    dragonDiv.style.display = 'block';
})


// fonction
function GameNain(){

    let Nain = new Nain();
    
    
    }
    
let prs = new Humain();
let prs1 = new Humain();
let n = new Nain();
let w = new Wolf();
let o = new Orcq();
let d = new Dragonnet();


prs.loot(w);

console.log(w);
prs.frappe(w)
console.log(w);

console.log(d);
console.log(o);
console.log(prs);
console.log(prs1);
console.log(n);


const buttons = document.querySelectorAll("#btnAction>*");

console.log(buttons);

for (let i = 0 ; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function()
    {
        const joueur = buttons[i].innerHTML;

        const adversaire = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;

        let resultat = "";

        if (joueur == "Attaque" && adversaire == "Bloquage")
        {
            resultat = "L'ennemi à bloqué votre attaque";
        }

        else if (joueur == "Attaque" && adversaire == "Attaque")
        {
            resultat = "Vous vous attaquer mutuellement"
        }

        else if (joueur == "Attaque" && adversaire == "Potion")
        {
            resultat = "L'ennemi à subis votre attaque & prend une potion";
        }

        else if (joueur == "Bloquage" && adversaire == "Attaque")
        {
            resultat = "Vous avez bloqué l'attaque ennemie";
        }

        else if (joueur == "Bloquage" && adversaire == "Bloquage")
        {
            resultat = "Bloquage des deux côté";
        }

        else if (joueur == "Bloquage" && adversaire == "Potion")
        {
            resultat = "Bloquage à échoué & l'ennemi prend une potion";
        }

        else if (joueur == "Potion" && adversaire == "Attaque")
        {
            resultat = "Vous vous soignez & l'ennemi attaque";
        }

        else if (joueur == "Potion" && adversaire == "Bloquage")
        {
            resultat = "Vous vous soignez & le bloquage ennemi echoue";
        }

        else if (joueur == "Potion" && adversaire == "Potion")
        {
            resultat = "Vous vous soignez mutuellement";
        }

        document.querySelector(".resultat").innerHTML = 
        `
            Joueur : ${joueur} <br>
            Adversaire : ${adversaire} <br>
            ${resultat}
        `;
    });
}



        
        
        
        
        
        
        
        
        