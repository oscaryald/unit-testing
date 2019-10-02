/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  /////////////////////

  it('should increment current number of voted', () => {
    expect(htmlElement.textContent).toEqual('Votes: 1');
  });

  it('should increment totalVotes when upvoted', () => {
    const initialValue = component.totalVotes;
    component.upVote();
    const newValue = component.totalVotes;
    expect(newValue).toBeGreaterThan(initialValue);
  });

  it('should decrement totalVotes when upvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(0);
  });
});
