import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota';
import { mostrarMascota } from 'src/app/models/mostrar-mascota';
import { MascotaService } from 'src/app/services/mascota.service';

interface TipoMascota {
  id_tipo_mascota: number;
  animal: String;
}

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})


export class MascotaComponent implements OnInit {

  tipoMascota : TipoMascota
  //formulario de la mascota
  formMascota : FormGroup;

  constructor(private router:Router, private form:FormsModule, private mascota:MascotaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    let id_tipo_mascota = this.formMascota.get("id_tipo_mascota")?.value;
    let animal = this.formMascota.get("animal")?.value;
    this.tipoMascota = {
      id_tipo_mascota: id_tipo_mascota,
      animal: animal,
    };
  }

  /*
  **Construye el formulario de la busqueda
  */
  buildForm(){
    this.formMascota = this.formBuilder.group({
      nombre : [null],
      id_tipo_mascota: [null],
      animal: [null],
      raza: [null],
      historial: [null],
    });
  }
  
  postform(form: mostrarMascota){
    this.mascota.agregarMasco(form).subscribe(info=>{
      alert('Se ha registrado con exito')
      console.log(info)
      this.router.navigate(['/mascotas']);
    })
    
  }

  regresar(){
    this.router.navigate(['/mascotas']);
  }

}
