import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UnitCardComponent } from './components/unit-card/unit-card.component';
import { UnitComponent } from './components/unit/unit.component';
import { ReviewBoxComponent } from './components/review-box/review-box.component';
import { ReviewCommentComponent } from './components/review-comment/review-comment.component';
import { LoginComponent } from './components/login/login.component';
import { UnitsComponent } from './components/units/units.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    UnitCardComponent,
    UnitComponent,
    ReviewBoxComponent,
    ReviewCommentComponent,
    LoginComponent,
    UnitsComponent,
    AddReviewComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
