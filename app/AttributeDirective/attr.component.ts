import { Component, OnInit } from "@angular/core";

@Component({
    selector:"attr-comp",
    templateUrl:"./attr.component.html",
    styleUrls:["./attr.component.css"]
})

export class AttributeComponent implements OnInit
{
    clr!:string;
    fsize!:number;

    ngOnInit(): void {
        this.clr = "green";
        this.fsize = 25;
    }
}