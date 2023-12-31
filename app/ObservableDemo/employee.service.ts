import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "./Employee"

@Injectable()
export class EmployeeService
{
    private _url:string = "assets/Data/employees.json";
    constructor(private http:HttpClient){}

    getEmployees():Observable<IEmployee[]>
    {
        return this.http.get<IEmployee[]>(this._url);
    }
}