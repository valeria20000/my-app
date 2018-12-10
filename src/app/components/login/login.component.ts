import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/providers/login.service';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario : FormGroup;
  mensaje: string;

  constructor(private loginService: LoginService, private router: Router) { 
    this.crearFormulario();
    this.mensaje = '';
  }

  ngOnInit() {
  }

  private crearFormulario(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [ Validators.required,Validators.minLength(2), Validators.maxLength(25)]),
      password: new FormControl('', [ Validators.required,Validators.minLength(6), Validators.maxLength(25)])

    });
  }
  sumitar(){
    let nombre = this.formulario.controls.nombre.value;
    let password = this.formulario.controls.password.value;

    let u = new Usuario();
    u.nombre = nombre;
    u.password = password;

    if(this.loginService.login(u)){
      this.router.navigate(['crud']);

    }else{
      this.mensaje = 'Credenciales incorrectas';
    }
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['comparador']);
  }

  logueado() {
    if (this.loginService.isLogged()) {
      return true
    } else { return false }
  }

}
