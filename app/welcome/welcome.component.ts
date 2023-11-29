import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:"welcome-comp",
    template:"<h1>{{ message}}</h1>",
    styles:["h1{color:blue; background-color:lightgreen}"]
})

export class welcome
{
    message:string = "This is inline template and css...";
}