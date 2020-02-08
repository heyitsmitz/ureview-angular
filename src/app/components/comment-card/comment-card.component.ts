import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

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
