import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Input() itemId: String;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(rating: number) {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: this.rating
    });
  }
}
