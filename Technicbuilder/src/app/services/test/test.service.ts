import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class TestService {
    private timer;
    constructor() { }
    public refreshTokens(): BehaviorSubject<string> {
        return Observable.interval(5000).switchMap(() => );
    }console.log('Hello')
}
