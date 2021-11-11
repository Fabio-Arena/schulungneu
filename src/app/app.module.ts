import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BildComponent } from './bild/bild.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    BildComponent,
    InputComponent,
    TableComponent,
    ButtonComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
