import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './main/employee/employee.component';
import { MaterialModule } from './material/material.module';
import { EmployeesService } from './shared/employees.service';

@NgModule({
  declarations: [     //components,directives,pipes
    AppComponent,
    MainComponent,
    EmployeeComponent
  ],
  imports: [          //Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [EmployeesService],    //services
  bootstrap: [AppComponent]
})
export class AppModule { }
