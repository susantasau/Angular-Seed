import {Component} from "@angular/core";

@Component({
    template:"<h1>{{notfound}}</h1>"
})

export class NotfoundComponent
{
    notfound:string = "Page not found";
}