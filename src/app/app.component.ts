import { Component } from '@angular/core';
import { LoginService } from 'src/app/providers/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  {
  title = 'Valeria';
  constructor(private loginService: LoginService) { }

  logueado() {
    if (this.loginService.isLogged()) {
      return true
    } else { return false }
  }

}
