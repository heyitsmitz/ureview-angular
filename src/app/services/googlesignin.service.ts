import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GooglesigninService {

  user: SocialUser;
  loggedIn: boolean; 

  constructor(
    private router: Router,
    private authService: AuthService) {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      if (this.loggedIn == true){
        console.log(this.user);
      }
      this.navigateTo()
            
    });

   }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log("User signed in.")
  }
  signOut(): void {
    this.authService.signOut();
    console.log("User signed out.")
  }

  navigateTo():void {
    if (this.loggedIn == true) {
      this.router.navigate(['/home/units']);
    } else {
      this.router.navigate(['/login']);
    }

  }

  checkLoginStatus():boolean{
    if (this.loggedIn == true) {
      return true
    } else {
      return false
    }
  }
}
