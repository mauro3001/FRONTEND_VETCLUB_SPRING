import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private form:FormsModule, private usuario:UsuarioService) { }

  datosusuarios !: Usuario;

  editarform = new FormGroup({
    nombre : new FormControl(''),
    correo : new FormControl(''),
    telefono : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl(''),
  });

  ngOnInit(): void {
    let id_user = this.activeroute.snapshot.paramMap.get('id_usuario')
    this.usuario.extraerUsuario(id_user).subscribe(datos=>{
      this.datosusuarios = datos;
      this.editarform.setValue({
        'nombre': this.datosusuarios.nombre,
        'correo': this.datosusuarios.correo,
        'telefono': this.datosusuarios.telefono,
        'username': this.datosusuarios.username,
        'password': this.datosusuarios.password,
      })
    })
  }

  putform(form: Usuario){
    let userid_up = this.activeroute.snapshot.paramMap.get('id_usuario');
    this.usuario.putUsuario(form,userid_up).subscribe(datos=>{
      Swal.fire('Persona Actualizada', 'Persona actualizada exitosamente', 'success');
      this.router.navigate(['usuarios']);
    })
  }

  regresar(){
    this.router.navigate(['usuarios']);
  }

}
