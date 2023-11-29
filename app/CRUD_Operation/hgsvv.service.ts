import {Injectable} from "@angular/core";
import { HGSVV } from "./hgsvv";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()


export class HgsvvServices
{
    private MyUrl : string = "https://localhost:7268/api/HGSVV/";
    s:HGSVV = new HGSVV();

    constructor(private myHttp : HttpClient){}

    ReadData():Observable<HGSVV[]>
    {
        return this.myHttp.get<HGSVV[]>(this.MyUrl + "GetData");
    }

    PostData(roll:number, name:string, mark:number): Observable<number>
    {
       return this.myHttp.post<number>(`${this.MyUrl}?rollno=${roll}&name=${name}&marks=${mark}`,this.s);
    }

    GetData(id:number) : Observable<HGSVV[]>
    {
        return this.myHttp.get<HGSVV[]>(this.MyUrl + `${id}`);
    }
    PutData()
    {

    }
}