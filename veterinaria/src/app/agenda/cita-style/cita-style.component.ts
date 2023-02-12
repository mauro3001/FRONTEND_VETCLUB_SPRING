import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cita-style',
  templateUrl: './cita-style.component.html',
  styleUrls: ['./cita-style.component.css']
})
export class CitaStyleComponent implements OnInit {

  formCita2 = new FormGroup({
    profesional : new FormControl(''),
    tipoMascota : new FormControl(''),
    nickname : new FormControl(''),
    tipoProceso : new FormControl(''),
    fecha : new FormControl(''),
    hora : new FormControl('')
  })

  constructor(private router: Router, private form:FormsModule, private cita:CitaService) { }

  ngOnInit(): void {
  }

  postform(form: Cita){
    this.cita.agregarCita(form).subscribe(info=>{
      Swal.fire('Cita Programada', 'Se a programado la cita con exito', 'success');
      this.router.navigate([''])
    })
  }

  regresar(){
    this.router.navigate([''])
  }

}
