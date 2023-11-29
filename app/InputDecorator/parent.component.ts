import {Component} from "@angular/core";

@Component({
    selector:"msg-parent",
    templateUrl:"./parent.component.html",
    styleUrls:["./parent.component.css"]
})

export class MsgParent
{
    send!:string;
    places:string[] = ["Pune","Mumbai","Jaipur"];

    
}