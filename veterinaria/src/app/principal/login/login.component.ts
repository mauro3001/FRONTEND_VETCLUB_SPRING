import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup;
  loginDat = {
    
  }
  constructor(private router:Router, private usuario:UsuarioService, private formBuilder: FormBuilder, private snack: MatSnackBar) { }

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

 postform(form: Usuario){
  this.usuario.agregarUser(form).subscribe(info=>{
    this.snack.open('Ingreso Exitoso', 'Aceptar', {
      duration:5000
    });
    console.log(info)
    this.router.navigate(['usuarios'])
  })
 }

 regresar(){
  this.router.navigate(['login'])
}

}
