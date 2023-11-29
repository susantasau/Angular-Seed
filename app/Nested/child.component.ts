import { Component } from "@angular/core";

@Component({
    selector:"child-comp",
    template:"<div>{{childmsg}}</div>",
    styles:["div{color:green;background-color:yellow;}"]
})

export class childcomp
{
    childmsg:string ="This is a child class";
}