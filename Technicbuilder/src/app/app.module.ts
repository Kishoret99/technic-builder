import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import {
  MainRoutingModule,
  allComponents
} from './app.routes';
import { HomePage } from './pages/home/home.page';
import { HeaderWidget } from './widgets/header/header.widget';
import { RegisterWidget } from './widgets/register/register.widget';
import { TestService } from './services/test/test.service';


@NgModule({
  declarations: [
    AppComponent,
    ...allComponents,
    HeaderWidget,
    RegisterWidget,
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
