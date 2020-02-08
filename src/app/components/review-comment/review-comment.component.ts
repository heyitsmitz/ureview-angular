import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.css']
})
export class ReviewCommentComponent implements OnInit {

  @Input() comment: Comment;

  vote = 0; 
  userVote = 0;     // To check whether user has already upvoted

  constructor() { }

  ngOnInit() {
  }

  upvote() {
    if (this.userVote < 1) {
      this.vote = 1;
      this.userVote = 1;
    }
  }

  downvote() {
    if (this.userVote > -1) {
      this.vote = -1;
      this.userVote = -1;
    }
  }

}