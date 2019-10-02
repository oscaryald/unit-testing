/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestingFormComponent } from './testing-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { User } from '../testing-component/testing-component.component';

describe('TestingFormComponent', () => {
  let component: TestingFormComponent;
  let fixture: ComponentFixture<TestingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule ],
      declarations: [ TestingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should email field validaty', () => {
    const email = component.form.controls.email;
    expect(email.valid).toBeFalsy();

    let errors;
    errors = email.errors || {};
    expect(errors.required).toBeTruthy();

    email.setValue('test');
    errors = email.errors || {};
    expect(errors.pattern).toBeTruthy();
  });

  it('should submit a form emits user', () => {
    expect(component.form.valid).toBeFalsy();

    component.form.controls.email.setValue('test@test.com');
    component.form.controls.password.setValue('123456789');

    expect(component.form.valid).toBeTruthy();

    let user: User;
    component.loggedIn.subscribe(value => user = value);
    component.login();

    expect(user.email).toBe('test@test.com');
    expect(user.password).toBe('123456789');
  });
});
