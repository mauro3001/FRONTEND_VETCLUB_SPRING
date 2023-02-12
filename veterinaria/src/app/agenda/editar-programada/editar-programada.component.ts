import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/services/cita.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-programada',
  templateUrl: './editar-programada.component.html',
  styleUrls: ['./editar-programada.component.css']
})
export class EditarProgramadaComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private form:FormsModule, private cita:CitaService) { }

  datoscita !: Cita

  editarCita = new FormGroup({
    profesional : new FormControl(''),
    tipoMascota : new FormControl(''),
    nickname : new FormControl(''),
    tipoProceso : new FormControl(''),
    fecha : new FormControl(''),
    hora : new FormControl('')
  })

  ngOnInit(): void {
    let id_cita = this.activeroute.snapshot.paramMap.get('id_cita')
    this.cita.extraerCita(id_cita).subscribe(datos=>{
      this.datoscita = datos;
      this.editarCita.setValue({
        'profesional': this.datoscita.profesional,
        'tipoMascota': this.datoscita.tipoMascota,
        'nickname': this.datoscita.nickname,
        'tipoProceso': this.datoscita.tipoProceso,
        'fecha': this.datoscita.fecha,
        'hora': this.datoscita.hora,
      })
    })
  }

  putform(form: Cita){
    let citaid_up = this.activeroute.snapshot.paramMap.get('id_cita');
    this.cita.putCita(form,citaid_up).subscribe(datos=>{
      Swal.fire('Cita Actualizada', 'Cita actualizada exitosamente', 'success');
      this.router.navigate(['programadas']);
    })
  }

  regresar(){
    this.router.navigate(['programadas']);
  }
}
