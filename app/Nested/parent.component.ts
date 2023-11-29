import { Component } from "@angular/core";

@Component({
    selector:"parent-comp",
    template:"<div>{{parentmsg}}<br><child-comp></child-comp></div>",
    styles:["div{width:300px;height:100px;color:red;background-color:lightgreen;}"]
})

export class parentcomponent
{

    parentmsg:string = "This is a parent component";
}