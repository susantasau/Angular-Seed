import { Component } from "@angular/core";

@Component({
    selector:"bind-comp",
    templateUrl:"./binding.component.html"
})

export class BindingComponent
{
    msg:string = "Hello student";
    imgpath:string = "assets/Images/C.jpg";
    w:number = 100;
    ht:number = 100;

    personName:string = "Susanta";
    output:string = "";
    clr:string = "red";

    colors:string[] = ["green","blue","violet","yellow","brown","orange"] ;

    greet():void
    {
        this.output = "Hello " + this.personName;
    }
}