import {Component,OnInit} from "@angular/core";
import {IEmployee} from "./Employee"
import {EmployeeService} from "./employee.service";

@Component({
    selector:"emp-list",
    template:"<h2>Employee List</h2><ul><li *ngFor='let emp of emps'>{{emp.name}}</li></ul>",
    providers:[EmployeeService]
})

export class EmployeeListComponent implements OnInit
{
    emps:IEmployee[] = [];
    constructor(private _employeeService:EmployeeService){}

    ngOnInit()
    {
        this._employeeService.getEmployees().subscribe(data=>this.emps=data);
    }
}