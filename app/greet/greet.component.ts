import { Component } from "@angular/core";

@Component({
    selector:"greet",
    templateUrl:"./greet.component.html",
    styleUrls:["./greet.component.css"]
})

export class Greeting
{
    greetMsg:string = "Hello guys we welcome you for the party.....";
}