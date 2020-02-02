import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/interfaces/review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  unitCode: String;
  categories = ['Assignment 1', 'Assignment 2'];
  submitted = false;
  review: Review;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.unitCode = this._activatedRoute.snapshot.paramMap.get("unitCode");
    this._newReview();
  }

  onSubmit() {
    this.submitted = true;
    console.log("onSubmit");
  }

  onRatingClick(rating) {
    this.review.rating = rating.rating;
  }

  private _newReview() {
    this.review = {
      category: "",
      reviewText: "",
      rating: 0,
      anonymous: false
    }
  }
}
