class De {
    constructor(max) {
        this.max = max
        this.min = 1
    }

    

    lancer(max){
        if (max == 6) {
            
            this.caracGenerator(max);

        }else if(max == 4) {

            const damageD = Math.floor(Math.random()* (this.max - this.min + 1) + this.min);
            return damageD;

        }
    }

    caracGenerator() {
        des = [];
        let maximum = 4;
        for (let index = 0; index < maximum; index++) {
            des[index] = Math.floor(Math.random()* (this.max - this.min + 1) + this.min);
            des.sort((a, b) => b - a);
            return  des[0] + des[1] + des[2];     
    }
}
}




class Personnage  {
    
    constructor(){
        this.ptsDeVie
        this.force
        this.endurance

        this.de4 = new De(4)
        this.de6 = new De(6)

        
    }
}






class Hero extends Personnage {
    
    //Constructeur
    constructor(name, ptsVie, force, endurance){
        this.name = name
        super(ptsVie);
        super(force);
        super(endurance)
    }  
}



class Humain extends Hero{

    constructor(name){
        super(name)

    }
}


class Nain extends Hero {

    constructor(name){
        super(name)
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