import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"countrycode"
})



export class CountryComponent implements PipeTransform
{
    transform(value:string) {
        var ccode:string = "";
        for(let i = 0; i<3; i++)
        {
            ccode += value.charAt(i);
        }
        return ccode;
    }
}