import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test/test.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _testService: TestService
  ) { }

  ngOnInit() {
    this._testService.refreshTokens().subscribe((response) => {
      console.log('register component refreshed');
    });
  }

}
