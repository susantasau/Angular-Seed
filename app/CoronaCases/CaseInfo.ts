export class CoronaCase
{
    city:string;
    place:string;
    positiveCases:number;
    curedPatient:number;
    deathCases:number = 0;
    static total:number = 0;
    static totalDeath = 0;
    static totalCure = 0;
    static positive = 0;

    
    constructor(city:string,place:string,positiveCases:number,curedPatient:number,deathCases:number)
    {
        this.city = city;
        this.place = place;
        this.positiveCases = positiveCases;
        this.curedPatient = curedPatient;
        this.deathCases = deathCases;  
        
        CoronaCase.total +=  this.positiveCases + curedPatient + deathCases;
        CoronaCase.totalDeath += deathCases;
        CoronaCase.totalCure += curedPatient;
        CoronaCase.positive += positiveCases;
    }   
    
}