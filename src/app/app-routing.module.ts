import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component: ImagesComponent },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
