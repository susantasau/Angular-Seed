import { Component } from "@angular/core";

@Component({
    selector:"prop-comp",
    templateUrl:"./labcomp.component.html"
})

export class ComponentClass
{
    photo:string = "assets/Images/Fish.jpg";
    h1:number = 100;
    w1:number = 200;

    set!:string;
    setImage!:string;
    images:string[] = ["Flower","Fish","Grass"];

    change():void
    {
        if(this.set == "Flower")
        {
            this.setImage = "assets/Images/Flower.jpg";
        }
        else if(this.set == "Fish")
        {
            this.setImage = "assets/Images/Fish.jpg";
        }
        else
        {
            this.setImage = "assets/Images/Grass.jpg";
        }
    }
}