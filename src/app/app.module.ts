import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';

import { ConsultaCepModule } from "./consulta-cep/consulta-cep.module";


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    ConsultaCepModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
