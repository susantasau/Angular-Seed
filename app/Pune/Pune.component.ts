import { Component } from "@angular/core";

@Component({
    selector:"City",
    templateUrl:"./Pune.component.html",
    styleUrls:["./pune.component.css"]
})

export class AllCity
{
    city1:string = "Pune";
    city2:string = "Rajgurunagar";
    name:string[] = ["Susanta sau","Gayatri","Ankita","Puja"];
}