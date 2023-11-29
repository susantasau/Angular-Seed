import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellComponent } from './hello/hello.component';
import { Greeting } from './greet/greet.component';
import { AllCity } from './Pune/Pune.component';
import { welcome } from './welcome/welcome.component';
import { childcomp } from './Nested/child.component';
import { parentcomponent } from './Nested/parent.component';
import { Dircomp } from './directive/dir.component';
import { customer } from './Customer/customer.component';
import { NgSwitchComponent } from './NgSwitchDemo/ngswitch.component';
import { AttributeComponent } from './AttributeDirective/attr.component';
import { HighlightDirective } from './customDirective/highlight.directive';
import { OrderDetails } from './Order/order.component';
import { CovidComponent } from './CoronaCases/child.component';
import { ParentCompOutput } from './CoronaCases/parent.component';
import { PipeDemoComponent } from './PipeDemo/pipedemo.component';
import { ReversePipe } from './CustomPipe/reverse.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from './BindingDemo/Binding.component';
import { CountryComponent } from './CustomPipe/countrycode.pipe';
import { Calculator } from './Calculator/calc.component';
import { MsgChild } from './InputDecorator/Child.component';
import { MsgParent } from './InputDecorator/parent.component';
import { HomeComponent } from './Routing/home.component';
import { MsgComponent } from './Routing/messege.component';
import { Photocomponent } from './Routing/photos.component';
import { NotfoundComponent } from './Routing/notfound.component';
import { ComponentClass } from './LabComponentClass/componentClass.component';
import { DictChildComp } from './OutputDecorator/dictchild.component';
import { DictParentComp } from './OutputDecorator/dictparent.component';
import { Submodule } from './submodule/submodule.module';
import { TestService } from './ServiceDemo/testservice.component';
import { TemplateDrive } from './TemplateDriven/templateform.component';
import { RegistrationComponent } from './LabRegisterComp/registercomp.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './ObservableDemo/employeelist.component';
import { MDFComponent } from './ModelDrivenForms/modeldriven.component';
import { CustModule } from './CustomModule/custom.module';
import { HGSVVComponent } from './CRUD_Operation/hgsvv.component';


@NgModule({
  declarations: [
    AppComponent,HellComponent,Greeting,AllCity,welcome,childcomp,parentcomponent,Dircomp,customer,
    NgSwitchComponent,AttributeComponent,HighlightDirective,OrderDetails,CovidComponent,ParentCompOutput,
    PipeDemoComponent,ReversePipe,BindingComponent,CountryComponent,Calculator,MsgChild,MsgParent,HomeComponent,
    MsgComponent,Photocomponent,NotfoundComponent,ComponentClass,DictChildComp,DictParentComp,TestService,
    TemplateDrive,RegistrationComponent,EmployeeListComponent,MDFComponent,HGSVVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,Submodule,HttpClientModule,ReactiveFormsModule,CustModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
