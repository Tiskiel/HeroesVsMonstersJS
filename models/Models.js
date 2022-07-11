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
    #de4
    #force
    #endurance
    #ptsDeVie
    #dgts


    constructor() {
        this.#de6 = new De(6)
        this.#de4 = new De(4)
        this.#force = this.#de6.caracGenerator();
        this.#endurance = this.#de6.caracGenerator();
        this.resetPv();
        this.#dgts = this.#de4.lancer() + this.getModificateur(this.#force)
        

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
    get de4() {
        return this.#de4;
    }
    get de6() {
        return this.#de6;
    }
    get dgts() {
        return this.#dgts;
    }


    get estVivant() {
        return this.#ptsDeVie > 0 ;
    }

    resetPv() {

        this.#ptsDeVie = this.#endurance + this.getModificateur(this.#endurance);

    }

    getModificateur(stat) {

        return stat > 15 ? 2 : stat > 10 ? 1 : stat > 5 ? 0 : -1;
    }

    frappe(enemi) {

        if (this != enemi && enemi != null) {

            enemi.#ptsDeVie -= this.#dgts;

        }
    }
}






class Hero extends Personnage {

    #cuir;
    #or;
    //Constructeur
    constructor() {

        super()
        this.#cuir = 0;
        this.#or = 0;
    }

    get or() {
        return this.#or;
    }

    get cuir() {
        return this.#cuir;
    }

    seReposer() {
        this.resetPv();
    }

    loot(enemi) {
        console.log(`Loot de l'ennemi`);
        if (enemi == null) return;
        if ('or' in enemi) {
            console.log(`L'enemi contient de l'or`);
            this.#or += enemi.or;
        
        }
        if ('cuir' in enemi) {
            console.log(`L'enemi contient du cuir`);
            this.#cuir += enemi.cuir;
        }
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

    #or
    #cuir
    constructor() {

        super();
        this.name = 'Dragonnet';
        this.#or = this.de6.lancer();
        this.#cuir = this.de4.lancer();
    }

    get endurance() {
        return this.endurance + 1;
    }
    get or() {
        return this.#or
    }
    get cuir() {
        return this.#cuir
    }
}





class Orcq extends Monster {
    #or
    constructor() {

        super();
        this.name = 'Orcq';
        this.#or = this.de6.lancer();

    }

    get force() {
        return this.force + 1;
    }
    get or() {
        return this.#or;
    }

}



class Wolf extends Monster {

    #cuir
    constructor() {

        super();
        this.name = 'Loup';
        this.#cuir = this.de4.lancer();

    }
    get cuir() {
        return this.#cuir;
    }
}