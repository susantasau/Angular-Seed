import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Routing/home.component';
import { MsgComponent } from './Routing/messege.component';
import { Photocomponent } from './Routing/photos.component';
import { NotfoundComponent } from './Routing/notfound.component';

const routes: Routes = [{path:"", component:HomeComponent},{path:"Messege", component:MsgComponent},
{path:"Galary",component:Photocomponent},{path:"**",component:NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
