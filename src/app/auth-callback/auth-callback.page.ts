import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.page.html',
  styleUrls: ['./auth-callback.page.scss'],
})
export class AuthCallbackPage implements OnInit, OnDestroy {
  queryParamsSub: Subscription;

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    this.queryParamsSub = this.route.queryParams.subscribe((params) => {
      // console.log(params);

      if (params.hasOwnProperty('token') && this.auth.verifySessionToken(params.token)) {
        this.auth.sampleLogIn(params.token);
      } else {
        console.log('No token found!');
        this.auth.sampleLogOut();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSub) {
      this.queryParamsSub.unsubscribe();
    }
  }
}
