import { Component } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userId: string;

  constructor(private authService: AuthService) {
    this.userId = this.authService.getToken();
  }

  sampleLogOut() {
    this.authService.sampleLogOut();
  }
}
