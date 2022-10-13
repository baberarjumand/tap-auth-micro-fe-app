import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  sampleLogIn() {
    this.authService.sampleLogIn();
  }

  loginWithWallet(walletType: string) {
    window.location.href = environment.REACT_APP_BASE_URL + '/' + walletType;
  }

}
