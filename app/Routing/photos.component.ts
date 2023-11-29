import {Component} from "@angular/core";

@Component({
    template: "<img src='{{photo}}' alt='Not available' [width]='w' height='{{h}}'/>"
})

export class Photocomponent
{
    photo:string = "assets/Images/Flower.jpg";
    w:number = 100;
    h:number = 100;
}