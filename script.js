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
const paraM = document.getElementById('paraM');
const paraH = document.getElementById('paraH');
const round = document.getElementById('round')
const returnbtn = document.getElementById('returnBtn');
const progVie = document.getElementById('ptsDevie')

let img = document.createElement("img");

// bouton start
startbtn.addEventListener('click', () => {

    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    startbtn.style.display = 'none';
    humainDiv.style.display = 'none';
    nainDiv.style.display = 'none';
    dragonDiv.style.display = 'none';
    wolfDiv.style.display = 'none';
    orcDiv.style.display = 'none';
})

// choix Humain
btnHuman.addEventListener('click', () => {

    btnHuman.style.display = 'none';
    btnNain.style.display = 'none';
    pWelcome.style.display = 'none';
    imgMap.classList.add('map');
    humainDiv.style.display = 'block';

    let Patrick = new Humain();

    setTimeout(() => { fight(Patrick) }, 1000)
})

// choix Nain
btnNain.addEventListener('click', () => {

    btnNain.style.display = 'none';
    btnHuman.style.display = 'none';
    pWelcome.style.display = 'none';
    imgMap.classList.add('map');
    nainDiv.style.display = 'block';

    let Bob = new Nain();

    setTimeout(() => { fight(Bob) }, 1000)
})

// bouton retour
returnbtn.addEventListener('click', () => {

    returnbtn.addEventListener('click', location.reload(), false);
    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 0%, 0 0%)";
    startbtn.style.display = 'block';
})

// effet de pause
function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

// generation de monstre
function genMonster() {

    let monster;

    switch (Math.floor((Math.random() * 3))) {

        case 0:
            monster = new Orcq();
            break;

        case 1:
            monster = new Dragonnet();
            break;

        default:
            monster = new Wolf();
            break;
    }

    return monster;
}

// se battre
async function fight(hero) {

    let compt = 0;

    //verif si hero en vie et round
    while (hero.estVivant && compt != 4) {

        
        round.innerHTML = `Round ${compt + 1}`;
        let hits = true;
        hero.seReposer();
        compt++
        let rdmMonster = genMonster();

        await sleep(1000)

        while (rdmMonster.estVivant && hero.estVivant) {

            await sleep(1000);

            // affichage stats hero
            paraH.innerHTML = `Points de vie : ${hero.ptsDeVie} <br> Dégats d'attaque : ${hero.dgts} <br> Or : ${hero.or} <br> Cuir : ${hero.cuir}`;

            // apparition des monstres à l'écran
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

            // affichage stats monstre
            paraM.innerHTML = `Points de vie : ${rdmMonster.ptsDeVie} <br> Dégats d'attaque : ${rdmMonster.dgts}`;

            await sleep(1000);

            // frappe du hero
            if (hits == true) {

                pNotif.innerHTML = `Votre hero frappe ${rdmMonster.name} et celui-ci perd ${hero.dgts} de vie !`

                hero.frappe(rdmMonster);

                await sleep(1000);

                if (!rdmMonster.estVivant) {

                    switch (rdmMonster.constructor) {

                        case Orcq:
                            pNotif.innerHTML = `Votre hero à tué l' ${rdmMonster.name} et dépouille celui-ci de ${rdmMonster.or} d'or !`
                            break;

                        case Wolf:
                            pNotif.innerHTML = `Votre hero à arraché la machoir du ${rdmMonster.name}, dépeuce celui-ci et récupère ${rdmMonster.cuir} de cuir !`
                            break;

                        default:
                            pNotif.innerHTML = `Votre hero à décapité le ${rdmMonster.name} et récupère ${rdmMonster.or} d'or et fini par le dépeucer pour avoir ${rdmMonster.cuir} de cuir !`
                            break;
                    }

                    // loot du monstre
                    hero.loot(rdmMonster);

                    await sleep(1000);

                    // disparition du monstre de l'écran
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
 
                    pNotif.innerHTML = `Votre hero se boit une bonne choppe et récupère toute sa vie !`

                    await sleep(1000);
                }
            } 

            // frappe monstre
            else if (hits == false) {

                pNotif.innerHTML = `Votre hero à été attaqué par ${rdmMonster.name}, vous perdez ${rdmMonster.dgts} de vie !`

                rdmMonster.frappe(hero);
            }

            hits = !hits;

            await sleep(1000);
        }
    }

    await sleep(1000);

    // affichage résultat final
    if (hero.estVivant) {

        pNotif.innerText = `Félicitation vous avez survécu à la forêt de Sharewood`;

        notifLoot.innerText = `Vous possedez ${hero.or} d'or(s) et ${hero.cuir} cuir(s)`;

    } 
    
    else pNotif.innerText = `T'estune fameuse clette, ta bi fais d'crevé !`;
}
