import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnergyIndicatorComponent } from './energy-indicator/energy-indicator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { TemperatureComponent } from './temperature/temperature.component';
import { PressureComponent } from './pressure/pressure.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EnergyIndicatorComponent,
    TemperatureComponent,
    PressureComponent,
    HomeComponent,
    TableComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
