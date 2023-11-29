import { Component } from "@angular/core";

@Component({
    selector:"first-comp",
    template:"<h2>{{msg}}</h2>"
})


export class FirstComponent
{
    msg:string =  "Hello this is a first component....";
}