import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BildComponent } from './bild/bild.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackfailedComponent } from './feedbackfailed/feedbackfailed.component';




@NgModule({
  declarations: [
    AppComponent,
    BildComponent,
    InputComponent,
    TableComponent,
    ButtonComponent,
    NavbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    ImagesComponent,
    FeedbackComponent,
    FeedbackfailedComponent
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
