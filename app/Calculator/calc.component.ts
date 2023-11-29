import {Component} from "@angular/core";
@Component({
    selector:"calc-comp",
    templateUrl:"./calc.component.html",
    styleUrls:["./calc.component.css"]
})

export class Calculator
{
    text1:number = 0;
    text2:number = 0;
    addvalue:number = 0;
    
    add():void
    {
        this.addvalue = this.text1 + this.text2;        
        
    }
    sub():void
    {
        this.addvalue = this.text1 - this.text2;
    }
    mul():void
    {
        this.addvalue =  this.text1 * this.text2;
    }
    div():void
    {
        this.addvalue = this.text1/this.text2;
    }
}