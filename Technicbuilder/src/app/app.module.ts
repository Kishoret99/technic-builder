import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MainRoutingModule,
  allComponents
} from './app.routes';
import { HomePage } from './pages/home/home.page';
import { HeaderWidget } from './widgets/header/header.widget';


@NgModule({
  declarations: [
    AppComponent,
    ...allComponents,
    HeaderWidget
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
