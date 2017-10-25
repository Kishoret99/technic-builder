import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MainRoutingModule,
  allComponents
} from './app.routes';
import { HomePage } from './pages/home/home.page';
import { HeaderWidget } from './widgets/header/header.widget';
import { RegisterComponent } from './widgets/register/register.component';
import { TestService } from './services/test/test.service';


@NgModule({
  declarations: [
    AppComponent,
    ...allComponents,
    HeaderWidget,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
