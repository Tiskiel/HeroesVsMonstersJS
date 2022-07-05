class De {
    constructor(max) {
        this.max = max
        this.min = 1
    }

    

    lancer(max){
        if (max == 6) {
            
            this.caracGenerator(max);

        }else if(max == 4) {

            const damageD = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            return damageD;

        }
    }

    caracGenerator(max) {
        des = [];
        let maximum = 4;
        for (let index = 0; index < maximum; index++) {
            des[index] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            des.sort((a, b) => b - a);
            return  des[0] + des[1] + des[2];     
    }
}
}




class Personnage  {

    de6 = new De(6)
    
    mort(){
        if(this.ptsDeVie <= 0) {
            console.log('');
        }
    }

    constructor(){

        this.force = this.de6.lancer(4);
        this.endurance = this.de6.lancer(4);
        this.ptsDeVie = this.endurance > 5 ? this.endurance + 0 : this.endurance > 10 ? this.endurance + 1 : this.endurance > 15 ? this.endurance + 2 : this.endurance - 1;
        
        this.mort = mort();
    }
}






class Hero extends Personnage {
    
    //Constructeur
    constructor() {

        super();

    }
}



class Humain extends Hero{

    constructor() {
        this.endurance = super(endurance) + 1;
        this.mort
        this.name = 'Humain';
        super();

    }
}


class Nain extends Hero {

    
    constructor() {

        this.name = 'Nain'
        super();
        
    }
}








class Monster extends Personnage {

}



class Dragonnet extends Monster {
    
}





class  Orcq extends Monster {
    
}



class Wolf extends Monster{
    
}