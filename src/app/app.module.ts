import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

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
import { CommentCardComponent } from './components/comment-card/comment-card.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("861189590650-j8jct7bgink61uvu4ndd251r4nfe2th5.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

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
    CommentCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule.forRoot()],

  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
