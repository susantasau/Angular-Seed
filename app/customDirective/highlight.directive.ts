import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[myhighlight]'
})

export class HighlightDirective
{
    constructor(e1:ElementRef)
    {
        e1.nativeElement.style.backgroundColor = "lightcyan";
        e1.nativeElement.style.fontWeight = "bold";
        e1.nativeElement.style.color = "red";
        e1.nativeElement.style.fontFamily = "fantacy";
        //e1.nativeElement.style.textShadow = "2px 2px 5px black";
        e1.nativeElement.style.border = "2px dashed red";
        e1.nativeElement.style.fontSize = "25px";
    }
}