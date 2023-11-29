import { Component, Pipe, PipeTransform } from "@angular/core";
import { Employee } from "./Employee";


@Component({
    selector:"pipe-comp",
    templateUrl:"./pipedemo.component.html"
})


export class PipeDemoComponent 
{
    empobj:Employee  = new Employee(101,"Susanta","Sau",25000,new Date("1992,6,12"),"India");

    
}