import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { Pragim1Component } from './pragim1/pragim1.component';
import { EmployeeCount } from './employee-count/employee-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCount,    
    Pragim1Component,
  ],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent] //
  //,Pragim1Component,EmployeeCount] - due to this bindings were not working 
})
export class AppModule { }
