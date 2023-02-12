import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup;
  loginDat = {
    
  }
  constructor(private router:Router, private login:LoginService, private formBuilder: FormBuilder, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.buildForm();
  }

  /*
  **Contruccion del formualrio login
  */
 buildForm(){
  this.formLogin = this.formBuilder.group({
    username : [null],
    password : [null]
  });
 }

 postform(form: Login){
  this.login.loginForm(form).subscribe((info:any)=>{
    this.snack.open('Ingreso Exitoso', 'Aceptar', {
      duration:8000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['mat-accent'] 
    });
    this.login.loginUser(info.token);
    this.router.navigate(['admin'])
  })

 }

 regresar(){
  this.router.navigate(['login'])
}

}
