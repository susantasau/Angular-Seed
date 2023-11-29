import { Component } from "@angular/core";

@Component(
{
    selector:"hello-comp",
    templateUrl:"./hello.component.html",
    styleUrls:["./hello.component.css"]
})
export class HellComponent
{
    msg:string = "Hello world";
}