export class Employee
{
    empId:number;
    firstName:string;
    lastName:string;
    salary:number;
    dt:Date;
    country:string;

    constructor(ei:number,fn:string,ln:string,sa:number,da:Date,co:string)
    {
        this.empId = ei;
        this.firstName = fn;
        this.lastName = ln;
        this.salary = sa;
        this.dt = da;
        this.country = co;
    }
}