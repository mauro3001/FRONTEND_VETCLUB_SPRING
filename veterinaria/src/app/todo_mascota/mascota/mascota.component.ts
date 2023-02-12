import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mostrarMascota } from 'src/app/models/mostrar-mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})


export class MascotaComponent implements OnInit {

  //formulario de la mascota
  formMascota : FormGroup;

  constructor(private router:Router, private form:FormsModule, private mascota:MascotaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  /*
  **Construye el formulario de la busqueda
  */
  buildForm(){
    this.formMascota = this.formBuilder.group({
      nombre : [null],
      tipoMascota: [null],
      animal: [null],
      raza: [null],
      historial: [null],
    });
  }
  
  postform(form: mostrarMascota){
    this.mascota.agregarMasco(form).subscribe(info=>{
      Swal.fire('Mascota Guardada', 'Mascota registrada con exito', 'success');
      this.router.navigate(['/mascotas']);
    })
    
  }

  regresar(){
    this.router.navigate(['/mascotas']);
  }

}
