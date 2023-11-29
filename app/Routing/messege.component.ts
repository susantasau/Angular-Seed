import { Component } from "@angular/core";

@Component({
    template:"<h1>{{titleMsg}}</h1>"
})

export class MsgComponent
{
    titleMsg:string = "This is a messege for you...";
}