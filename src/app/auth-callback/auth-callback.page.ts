import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.page.html',
  styleUrls: ['./auth-callback.page.scss'],
})
export class AuthCallbackPage implements OnInit, OnDestroy {
  queryParamsSub: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryParamsSub = this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSub) {
      this.queryParamsSub.unsubscribe();
    }
  }
}
