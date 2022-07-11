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
const dragonDiv = document.getElementById('dragonDiv');
const wolfDiv = document.getElementById('wolfDiv');
const orcDiv = document.getElementById('orcDiv');
const pNotif = document.getElementById('pNotif');
const notifLoot = document.getElementById('notifLoot')

let img = document.createElement("img");


startbtn.addEventListener('click', () => 
{
    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    startbtn.style.display = 'none';
    humainDiv.style.display = 'none';
    nainDiv.style.display = 'none';
    dragonDiv.style.display = 'none';
    wolfDiv.style.display = 'none';
    orcDiv.style.display = 'none';
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

//

function genMonster() {
    let monster;

    switch (Math.floor((Math.random()*3))) {
        case 0:
            monster = new Orcq();
            console.log(`Orc créé`);
            break;
            case 1:
            monster = new Dragonnet();
            console.log(`Dragonnet créé`);
            break;
            
            default: 
            monster = new Wolf();
            console.log(`wolf créé`);
            break;
    }

    return monster;
}

// //let rdmMonster = imgMonster[rdm];
//     let o = new Orcq() 
//     let d = new Dragonnet()
//     let w = new Orcq()

//     let monsterList = [o, d, w];
//     let rdmMonster = monsterList[Math.floor((Math.random()*monsterList.length))];

//     let typeO = rdmMonster instanceof Orcq;

// btn choixHumain
btnHuman.addEventListener('click', () =>
{
    
    btnHuman.style.display = 'none';
    btnNain.style.display = 'none';
    pWelcome.style.display = 'none';
    imgMap.classList.add('map');
    humainDiv.style.display = 'block';
    
    
    let Patrick = new Humain();

    
    let compt = 0;
    

    
    
    
        
    while (Patrick.estVivant && compt != 1) {
        console.log(`Ceci est le compteur ${compt}`);
        let hits = true;
        Patrick.seReposer();
        compt++
        let rdmMonster = genMonster();
        
        console.log(`Point de vie de patrick : ${Patrick.ptsDeVie}`);
        

        while (rdmMonster.estVivant && Patrick.estVivant ) {
            
            //let i = 0;
            console.log('Coucou');
            
            
            switch (rdmMonster.constructor) {
                case Orcq:
                    orcDiv.style.display = 'block';
                    break;
                case Dragonnet:
                    dragonDiv.style.display = 'block';
                    break;
                case Wolf:
                    wolfDiv.style.display = 'block';
                    break;
            
            
            } 
                
                console.log(rdmMonster.ptsDeVie);
                console.log(Patrick.ptsDeVie);
                

                if (hits == true) {
                    console.log('2e if');

                    Patrick.frappe(rdmMonster);

                    console.log(rdmMonster.ptsDeVie);
                    console.log(Patrick.ptsDeVie);
                    
                    

                    if (!rdmMonster.estVivant) {
                        
                        console.log('thirth if');
                        
                        Patrick.loot(rdmMonster);
                        

                        switch (rdmMonster.constructor) {
                            case Orcq:
                                orcDiv.style.display = 'none';
                                break;
                            case Dragonnet:
                                dragonDiv.style.display = 'none';
                                break;
                            case Wolf:
                                wolfDiv.style.display = 'none';
                                break;
                        }
                    }   
                    
                
                } else if(hits == false) {

                    rdmMonster.frappe(Patrick);
                    
                }
                
                hits = !hits;

                
                console.log('pas dans le if');

            
            }        
                
        
    } 
    if (Patrick.estVivant) {
        
        pNotif.innerText = `Félicitation vous avez survécu à la forêt de Sherwood`;
        notifLoot.innerText = `Vous possedez ${Patrick.or} d'or et ${Patrick.cuir} de cuir`;
    } else pNotif.innerText = `Game Over`;
    
    
    
})


// btn choixNain
btnNain.addEventListener('click', () =>
{
    btnNain.style.display = 'none';
    btnHuman.style.display = 'none';
    pWelcome.style.display = 'none';
    imgMap.classList.add('map');
    nainDiv.style.display = 'block';
    //dragonDiv.style.display = 'block';
    //wolfDiv.style.display = 'block';
    //orcDiv.style.display = 'block';

    let Bob = new Nain();
    let o = new Orcq();
    let d = new Dragonnet();
    let w = new Wolf();

    let rdm = Math.floor((Math.random()*3));

    let rdmImg = imgList[rdm].style.display = 'block';

    rdmImg

    let compt = 0;
    let restorePv = Bob.ptsDeVie;

    while (Bob.ptsVie != 0 && compt != 8) {

        
        let mod = 0;
        compt++
        mod = compt % 2
        
        console.log(Bob.ptsDeVie);
        console.log(o.ptsDeVie);
        console.log(`Tour ${compt}`);
        if(imgList[rdm] == orcDiv && (mod == 0))
        {
            
            Bob.frappe(o);
            console.log(Bob.ptsDeVie);
            pNotif.innerText = `Bob frappe l'orc avec ${Bob.dgts} force, Point de vie de l'orc est de ${o.ptsDeVie} `

            if (o.ptsDeVie <= 0) {
                Bob.loot(o);
                Bob.ptsDeVie = restorePv;
                pNotif.innerText = `L'orc est mort. Bien joué jeune guerrier !`;
            }
        }else if(imgList[rdm] == orcDiv && (mod != 0))
        {
            o.frappe(Bob)
            console.log(o.ptsDeVie);

            if(Bob.ptsDeVie <= 0)
            {
                pNotif.innerText = `Bob est mort. Try again !`
                break
            }
        }else if(imgList[rdm] == wolfDiv && (mod == 0))
        {
            
            Bob.frappe(w);
            pNotif.innerText = `Bob frappe le loup avec ${Bob.dgts} force, Point de vie du loup est de ${w.ptsDeVie} `
            if (w.ptsDeVie <= 0) {
                Bob.loot(w)
                Bob.ptsDeVie = restorePv;
                pNotif.innerText = `Le loup est mort. Bien joué jeune guerrier !`;
            }
        }else if(imgList[rdm] == wolfDiv && (mod != 0))
        {
            w.frappe(Bob)

            if(Bob.ptsDeVie <= 0)
            {
                pNotif.innerText = `Bob est mort. Try again !`
                break
            }
        }else if(imgList[rdm] == dragonDiv && (mod == 0))
        {
            
            Bob.frappe(d);
            pNotif.innerText = `Bob frappe le dragonnet sous stéroïdes avec ${Bob.dgts} force, Point de vie du dragonnet est de ${d.ptsDeVie} `
            if (d.ptsDeVie <= 0) {
                Bob.loot(d)
                Bob.ptsDeVie = restorePv;
                pNotif.innerText = `Le dragonnet est mort. Bien joué jeune guerrier !`;
            }
        }else if(imgList[rdm] == dragonDiv && (mod != 0))
        {
            d.frappe(Bob)

            if(Bob.ptsDeVie <= 0)
            {
                pNotif.innerText = `Bob est mort. Try again !`
                break
            }
        }
        
    }
    
})


// fonction
// function GameNain(){

//     let Nain = new Nain();
    
    
//     }
    
// let prs = new Humain();
// let prs1 = new Humain();
// let n = new Nain();
// let w = new Wolf();
// let o = new Orcq();
// let d = new Dragonnet();


// prs.loot(w);

// console.log(w);
// prs.frappe(w)
// console.log(w);

// console.log(d);
// console.log(o);
// console.log(prs);
// console.log(prs1);
// console.log(n);


// const buttons = document.querySelectorAll("#btnAction>*");

// console.log(buttons);

// for (let i = 0 ; i < buttons.length; i++)
// {
//     buttons[i].addEventListener("click", function()
//     {
//         const joueur = buttons[i].innerHTML;

//         const adversaire = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;

//         let resultat = "";

//         if (joueur == "Attaque" && adversaire == "Bloquage")
//         {
//             resultat = "L'ennemi à bloqué votre attaque";
//         }

//         else if (joueur == "Attaque" && adversaire == "Attaque")
//         {
//             resultat = "Vous vous attaquer mutuellement"
//         }

//         else if (joueur == "Attaque" && adversaire == "Potion")
//         {
//             resultat = "L'ennemi à subis votre attaque & prend une potion";
//         }

//         else if (joueur == "Bloquage" && adversaire == "Attaque")
//         {
//             resultat = "Vous avez bloqué l'attaque ennemie";
//         }

//         else if (joueur == "Bloquage" && adversaire == "Bloquage")
//         {
//             resultat = "Bloquage des deux côté";
//         }

//         else if (joueur == "Bloquage" && adversaire == "Potion")
//         {
//             resultat = "Bloquage à échoué & l'ennemi prend une potion";
//         }

//         else if (joueur == "Potion" && adversaire == "Attaque")
//         {
//             resultat = "Vous vous soignez & l'ennemi attaque";
//         }

//         else if (joueur == "Potion" && adversaire == "Bloquage")
//         {
//             resultat = "Vous vous soignez & le bloquage ennemi echoue";
//         }

//         else if (joueur == "Potion" && adversaire == "Potion")
//         {
//             resultat = "Vous vous soignez mutuellement";
//         }

//         document.querySelector(".resultat").innerHTML = 
//         `
//             Joueur : ${joueur} <br>
//             Adversaire : ${adversaire} <br>
//             ${resultat}
//         `;
//     });
// }



        
        
        
        
        
        
        
        
        