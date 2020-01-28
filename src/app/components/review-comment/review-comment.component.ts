import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.css']
})
export class ReviewCommentComponent implements OnInit {

  @HostBinding('class') classList = '';
  @Input() class: String;

  constructor() { }

  ngOnInit() {
    if (this.class) {
      this.classList += this.class;
    }
  }

}
