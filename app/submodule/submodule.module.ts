import {NgModule} from "@angular/core";
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[FirstComponent,SecondComponent],
    imports:[BrowserModule],
    exports:[FirstComponent,SecondComponent],
    providers:[],
    bootstrap:[FirstComponent]
})

export class Submodule
{

}