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
    returnbtn.addEventListener('click', location.reload(), false);
    fond.style.clipPath = "polygon(0 0, 100% 0, 100% 0%, 0 0%)";
    startbtn.style.display = 'block';
    // btnHuman.style.display ='block';
    // btnNain.style.display = 'block';
})

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

async function fight(hero) 
{
    let compt = 0;
    while (hero.estVivant && compt != 4) {
        console.log(`Tour ${compt}`);
        let hits = true;
        hero.seReposer();
        compt++
        let rdmMonster = genMonster();
        
        console.log(`Point de vie du hero : ${hero.ptsDeVie}`);
        
        await sleep(1000)

        while (rdmMonster.estVivant && hero.estVivant ) {
            
            await sleep(1000);
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
            await sleep(1000);    
                

                if (hits == true) {
                    console.log('2e if');

                    hero.frappe(rdmMonster);

                    console.log(`vie du hero : ${hero.ptsDeVie}`);
                    console.log(`${hero.Dgts}`)
                    console.log(`vie du monstre : ${rdmMonster.ptsDeVie}`);

                    
                    await sleep(1000);

                    if (!rdmMonster.estVivant) {
                        
                        console.log('thirth if');
                        
                        hero.loot(rdmMonster);
                        
                        await sleep(1000);

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
                        await sleep(1000);
                    }   
                    
                
                } else if(hits == false) {

                    rdmMonster.frappe(hero);
                    
                }
                
                hits = !hits;

                
                await sleep(1000);

            
            }
            
                
        
    } 
    await sleep(1000);
    if (hero.estVivant) {
        
        pNotif.innerText = `Félicitation vous avez survécu à la forêt de Sherwood`;
        notifLoot.innerText = `Vous possedez ${hero.or} d'or et ${hero.cuir} de cuir`;
    } else pNotif.innerText = `Game Over`;    
}

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


btnHuman.addEventListener('click', () =>
{
    
    btnHuman.style.display = 'none';
    btnNain.style.display = 'none';
    pWelcome.style.display = 'none';
    imgMap.classList.add('map');
    humainDiv.style.display = 'block';
    
    
    let Patrick = new Humain();

    
    
    setTimeout( () => {fight(Patrick)}, 1000 )

    
    
    
        
    
    
    
    
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


    setTimeout( () => {fight(Bob)}, 1000 )
    
})






        
        
        
        
        
        
        
        
        