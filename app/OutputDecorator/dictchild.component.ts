import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"dict-child",
    templateUrl:"./dictchild.component.html",
    styles:["div {background-color:orange; width:400px; height:200px; float:right;} fieldset{width:300px; height:150px; margin-left:40px;}"]
})

export class DictChildComp
{
    searchWord:string = "";
    @Output() eventObj = new EventEmitter<string>();

    OnSearch():void
    {
        this.eventObj.emit(this.searchWord);
    }
}