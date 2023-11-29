import { Component } from "@angular/core";

@Component({
    selector:"second-comp",
    template:"<h2>{{msg1}}</h2>"
})


export class SecondComponent
{
    msg1:string =  "Hello this is a second component....";
}