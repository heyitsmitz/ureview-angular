import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.css']
})
export class ReviewCommentComponent implements OnInit {

  @Input() comment: Comment;

  userVote = 0;     // To check whether user has already upvoted

  constructor() { }

  ngOnInit() {
  }

  upvote() {
    if (this.userVote == 0) {
      this.comment.vote += 1;
      this.userVote = 1;
    } else if (this.userVote == 1) {
      this.comment.vote -= 1;
      this.userVote = 0;
    } else if (this.userVote == -1) {
      this.comment.vote += 2
      this.userVote = 1;
    }
  }

  downvote() {
    if (this.userVote == 0) {
      this.comment.vote -= 1;
      this.userVote = -1;
    } else if (this.userVote == -1) {
      this.comment.vote += 1;
      this.userVote = 0;
    }  else if (this.userVote == 1) {
      this.comment.vote -= 2;
      this.userVote = -1;
    }
  }

}