import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:"temp-comp",
    templateUrl:"./templateform.component.html"
})

export class TemplateDrive
{
    OnFormSubmit(formval:NgForm):void
    {
        console.log(formval.value);
        console.log("Name = " + formval.controls['fname'].value + " " + formval.controls['lname'].value);
        console.log("Email Id- " + formval.controls['email'].value);
    }
    OnReset(userForm:NgForm):void
    {
        userForm.reset();
    }
}