import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model'

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
    new Comment('Anonymous', 'Comment', 'Fri at 6 pm', 15),
    new Comment('Anonymous', 'Comment', 'Fri at 6 pm', 14),
    new Comment('Anonymous', 'Comment', 'Fri at 6 pm', 12),
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
