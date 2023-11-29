import { Component } from "@angular/core";
import { CovidComponent } from "./child.component";

@Component({
    selector:"parent-case",
    templateUrl:"./parent.component.html",
    styleUrls:["./parent.component.css"]
})

export class ParentCompOutput
{
    m:CovidComponent = new CovidComponent();
    p=this.m.s
    q= this.m.Cure();
    r = this.m.Death();
    t = this.m.Posiive();
}