import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatIconRegistry, MatCardModule, MatTabsModule, MatFormFieldModule, MatChipsModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { SmoothieComponent } from './smoothie/smoothie.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { AddFieldComponent } from './add-field/add-field.component';

@NgModule({
  declarations: [ //only component
    AppComponent,
    DashboardComponent,
    AppHeaderComponent,
    SmoothieComponent,
    DetailComponent,
    CreateComponent,
    AddFieldComponent
  ],
  imports: [
    BrowserModule, //first already
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  providers: [MatIconRegistry],  //already service
  bootstrap: [AppComponent]
})
export class AppModule { }  //module qu'on souhaite rendre dispo pour le reste de l'appli
