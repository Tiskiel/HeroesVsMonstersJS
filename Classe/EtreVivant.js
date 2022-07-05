class Personnage  
{
    
    JetDeDe() 
    {
        
        let sommesD;
        let listDeD = []; 
        listDeD.length = 4;
        
        for (let i = 0; i < listDeD.length; i++) 
        {
            
            listDeD[i] = Math.random(0, 6);

        
        }
        
        let min = Math.min(...listDeD);
        let listFinal = listDeD.filter(d => d != min);

        for (const d of listDeD) {
            
            sommesD += d;

        }

        return sommesD;
    }
}

