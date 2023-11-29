import { Injectable } from "@angular/core";

@Injectable()

export class HelloService
{
    parr:any[] = [
        {category:"Toys",plist:["Teddy Bear","Robot","Remote Car"]},
        {category:"Electronics",plist:["Refrigerator","TV","Laptop"]},
        {category:"Clothes",plist:["TShirt","Jeans","Shirt"]}
    ];


    sayHello():string
    {
        return "Welcome to world of Angular services";
    }

    getProducts(catg:string):string[]
    {
        let p:any;
        let s:string[] = [];
        for(p of this.parr)
        {
            if(catg == p.category)
            {
                s=p.plist;
                break;
            }
        }
        return s;
    }
}