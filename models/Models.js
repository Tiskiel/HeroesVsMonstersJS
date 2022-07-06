class De {

    constructor(max) {
        this.max = max;
        this.min = 1;
    }



    lancer() {

        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

    }

    caracGenerator() {
        let des = [];
        let maximum = 4;
        for (let index = 0; index < maximum; index++) {
            des[index] = this.lancer();
        }
        des.sort((a, b) => b - a);
        return des[0] + des[1] + des[2];
    }
}




class Personnage {

    #de6
    #force
    #endurance
    #ptsDeVie

    constructor() {
        this.#de6 = new De(6)

        this.#force = this.#de6.caracGenerator();
        this.#endurance = this.#de6.caracGenerator();
        this.#ptsDeVie = this.#endurance + this.getModificateur(this.#endurance)
        console.log('Personnage créé');
        
    }
    get force() {
        return this.#force;
    }
    get endurance() {
        return this.#endurance;
    }
    get ptsDeVie() {
        return this.#ptsDeVie;
    }


    get estVivant() {
        return this.#ptsDeVie > 0 ? true : false;
    }

    getModificateur(stat) {

        return stat > 15 ? 2 : stat > 10 ? 1 : stat > 5 ? 0 :  -1;
    }
}






class Hero extends Personnage {

    //Constructeur
    constructor() {

        super()

    }
}



class Humain extends Hero {

    constructor() {
        super();
        this.name = 'Humain';

    }

    get endurance() {
        return this.endurance + 1
    }
    get force() {
        return this.force + 1
    }
    
}


class Nain extends Hero {


    constructor() {

        super();
        this.name = 'Nain'

    }
    get endurance() {
        return this.endurance + 2
    }
}








class Monster extends Personnage {
    constructor() {

        super()

    }

}



class Dragonnet extends Monster {

}





class Orcq extends Monster {

}



class Wolf extends Monster {

}