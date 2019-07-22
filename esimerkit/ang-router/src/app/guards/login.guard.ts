import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
/*
LoginGuard on provider eli helperluokka, joka tarjoaa reitityksen eston tarvittaessa.
Tässä kysessä on feikattu loggautuminen. Jos Loginguard ei palauta true, ei päästetä
reittiä pitkin OtherComponent -komponenttiin
*/
@Injectable()
export class LoginGuard implements CanActivate {

  canActivate() {
    return this.checkIfLoggedIn();
  }

  private checkIfLoggedIn(): boolean {
    // Feikkiloggautuminen: randomilla true tai false
    const loggedIn: boolean = Math.random() < 0.7;
    console.log(loggedIn);

    if (!loggedIn) {
      window.alert('LoginGuard: The user is not logged in and can\'t navigate to OtherComponent');
    }
    return loggedIn;
  }
}
