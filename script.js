
const startbtn = document.getElementById('startBtn');
const fond = document.getElementById('fond');


startbtn.addEventListener('click', () => {
    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    startbtn.style.display = 'none'
    titre.style.display = 'none'
})

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





        
        
        
        
        
        
        
        
        