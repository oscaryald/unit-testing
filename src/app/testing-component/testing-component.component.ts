import { Component, Output, Input, EventEmitter } from '@angular/core';

export class User {
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent {

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  login(email, password) {
    if (email && password) {
      this.loggedIn.emit(new User(email, password));
    }
  }

}
