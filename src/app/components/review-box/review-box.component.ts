import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent implements OnInit {

  vote = 0; 
  userVote = 0;     // To check whether user has already upvoted
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  upvote() {
    this.vote += 1;
    this.userVote += 1;
  }

  downvote() {
    this.vote -= 1;
    this.userVote -= 1;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
