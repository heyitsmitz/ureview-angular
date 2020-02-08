import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment'

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent implements OnInit {

  vote = 0; 
  userVote = 0;     // To check whether user has already upvoted
  isCollapsed = false;
  comments: Array<Comment> = [
    { 'username': 'Anonymous', 'commentText': 'Comment', 'datetime': 'Fri at 6pm', 'vote': 10 },
    { 'username': 'Anonymous', 'commentText': 'Comment', 'datetime': 'Fri at 6pm', 'vote': 9 },
    { 'username': 'Anonymous', 'commentText': 'Comment', 'datetime': 'Fri at 6pm', 'vote': 7 },
  ];

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
