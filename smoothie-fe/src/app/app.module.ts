import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ //only component
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, //first already
    AppRoutingModule
  ],
  providers: [],  //already servie
  bootstrap: [AppComponent]
})
export class AppModule { }  //module qu'on souhaite rendre dispo pour le reste de l'appli
