import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

  constructor(
      private _angularFireDatabase: AngularFireDatabase,
      private _angularFireAuth: AngularFireAuth
  ) { }

}
