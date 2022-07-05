class De {
    constructor(max) 
    {
        this.max = max;
        this.min = 1;
    }

    lancer() 
    {
        des = []
        for (let index = 0; index < this.max; index++) {
            des[index] = (Math.floor(Math.random() * this.max - this.min + 1) + this.min)
        }

        des.sort((a, b) => b - a)

        return des[0] + des[1] + des[2]
    }
}