import { Component } from "@angular/core";
import { CoronaCase } from "./CaseInfo";

@Component({
    selector:"covid-comp",
    templateUrl:"./child.component.html",
    styleUrls:["./child.component.css"]
})


export class CovidComponent
{
    covid:CoronaCase[] = [new CoronaCase("Pune","Bhosari",14,5,2),
    new CoronaCase("Pune","Kharadi",10,6,1),
    new CoronaCase("Pune","Wakad",45,30,4),
    new CoronaCase("Pune","Swargate",63,45,12),
    new CoronaCase("Pune","Aundh",12,23,4),
    new CoronaCase("Pune","Shivaji Nagar",78,65,14),
    new CoronaCase("Pune","Viman Nagar",7,6,1)
]
    s=CoronaCase.total;
    Death():number
    {
        return CoronaCase.totalDeath;
    }
    Cure():number
    {
        return CoronaCase.totalCure;
    }
    Posiive():number
    {
        return CoronaCase.positive;
    }
}