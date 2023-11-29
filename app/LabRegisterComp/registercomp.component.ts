import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:"reg-form",
    templateUrl:"./registercomp.component.html",
    styleUrls:["./registercomp.component.css"]
})

export class RegistrationComponent
{
    mname:string= "";
    success:string = "";
    name!:string;
    vis:string = "hidden";
    gen!:string;

    OnBtnSubmit(myForm:NgForm):void
    {
        this.success = "Registration Successful";
        this.vis = "visible";

        this.name = myForm.controls['fname'].value + " " +this.mname + " " + myForm.controls['lname'].value;
        
    }
}