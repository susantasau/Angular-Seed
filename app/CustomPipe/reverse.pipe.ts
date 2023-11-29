import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"reversepipe"
})

export class ReversePipe implements PipeTransform
{
    transform(value:string):string {
        var newstr:string = "";

        for(var i = value.length-1; i>=0; i--)
        {
            newstr += value.charAt(i);
        }
        return newstr;
    }
}