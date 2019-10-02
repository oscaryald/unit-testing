import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.html',
  styleUrls: ['./vote-component.css']
})
export class VoteComponent implements OnInit {

  totalVotes = 0;

  constructor() { }

  ngOnInit() {
    this.totalVotes = 1;
  }

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }

}
