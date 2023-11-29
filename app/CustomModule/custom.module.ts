import { NgModule } from "@angular/core";
import { MyComponent } from "./Myts.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule ({
    declarations:[MyComponent],
    imports:[BrowserModule],
    exports:[MyComponent],
    providers:[],
    bootstrap:[MyComponent]
})

export class CustModule
{

}