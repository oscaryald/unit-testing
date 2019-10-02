import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';
import { User } from '../testing-component/testing-component.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.css']
})
export class TestingFormComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[^@]*@[^@]*')]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  login() {
    if (this.form.valid) {
      this.loggedIn.emit(
        new User(
          this.form.value.email,
          this.form.value.password,
        )
      );
    }
  }
}
