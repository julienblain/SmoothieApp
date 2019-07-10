import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatIconRegistry} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  declarations: [ //only component
    AppComponent,
    DashboardComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule, //first already
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule
    
  ],
  providers: [MatIconRegistry],  //already servie
  bootstrap: [AppComponent]
})
export class AppModule { }  //module qu'on souhaite rendre dispo pour le reste de l'appli
