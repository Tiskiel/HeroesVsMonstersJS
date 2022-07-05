class De {
    constructor(max) {
        this.max = max
        this.min = 1
    }

    lancer(){
        des = []
        for (let index = 0; index < this.max; index++) {
            des[index] = Math.floor(Math.random()* (this.max - this.min + 1) + this.min)
            des.sort((a, b) => b - a)
            return  des[0] + des[1] + des[2]            

        }
    }

}




class Personnage  {
    
    constructor(){
        this.PtsDeVie
        this.Force
        this.Endurance

        this.de4 = new De(4)
        this.de6 = new De(6)

        
    }
}






class Hero extends Personnage {
    
    //Constructeur
    constructor(name){
        this.name = name;

    }

    // greet() {
    //     console.log(`Hello ${this.name}`);
    
    //}
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