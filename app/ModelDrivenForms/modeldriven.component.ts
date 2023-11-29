import { Component } from "@angular/core";
import { FormControl,FormGroup, Validators } from "@angular/forms";

@Component({
    selector:"modeldrive-comp",
    templateUrl:"./modeldriven.component.html",
    styleUrls:["./modeldriven.component.css"]
})

export class MDFComponent
{
    userForm = new FormGroup({
        fname:new FormControl("Rohit",Validators.required),
        city:new FormControl("Delhi",Validators.required),
        age:new FormControl(25,[Validators.required,Validators.max(100),Validators.min(18)])
    });

    OnFormSubmit():void{
        console.log(this.userForm.value);
        console.log("Person Name= " + this.userForm.controls['fname'].value);
        console.log("City= " + this.userForm.controls['city'].value);
        console.log("Age= " + this.userForm.controls['age'].value);
    }

    get fname():any{
        return this.userForm.get('fname');
    }

    get city():any{
        return this.userForm.get('city');
    }

    get age():any{
        return this.userForm.get('age');
    }
}