import {Component} from "@angular/core";
import { product } from "./product";

@Component({
    selector:"prod-comp",
    templateUrl:"./dir.component.html",
    styleUrls:["./dir.component.css"]
})

export class Dircomp
{
    status:boolean = true;
    products:product[] = [new product(101,"Mouse",200),new product(102,"Keyboard",350),new product(103,"SSD",2500),
    new product(104,"RAM",1200),new product(105,"Battery",2000)];

    fruits:string[] = ["Apple","Banana","Pomegrnate","Pears","Goava","Cucumber","Watermelon"];
}