import { Component } from '@angular/core';
import {
    AngularFireDatabase,
} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public items;

  constructor(
      private _angularFireDB: AngularFireDatabase,
  ) {
      _angularFireDB.list('/contacts').valueChanges().subscribe(res => {
        this.items = res;
        console.log(this.items);
    });
  }
}
