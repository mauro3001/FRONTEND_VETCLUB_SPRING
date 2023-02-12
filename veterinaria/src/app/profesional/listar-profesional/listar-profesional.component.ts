import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesional } from 'src/app/models/profesional';
import { ProfesionalService } from 'src/app/services/profesional.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-profesional',
  templateUrl: './listar-profesional.component.html',
  styleUrls: ['./listar-profesional.component.css']
})
export class ListarProfesionalComponent implements OnInit {

  profesional : Profesional[] = []

  constructor(private profesionalService: ProfesionalService, private router: Router) { }

  ngOnInit(): void {
    this.cargarProfesional()
  }

  cargarProfesional(){
    this.profesionalService.obtenerProfesional().subscribe(datos=> {
      this.profesional = datos
    })
  }

  nuevoProfesional(){
    this.router.navigate(['profesionales/profesional'])
  }

  editarProfesional(id_profesional: any){
    this.router.navigate(['profesionales/editarProfesional', id_profesional])
  }

  eliminarPro(id_profesional: any){
    this.profesionalService.eliminarPro(id_profesional).subscribe(fin=> {
      this.cargarProfesional()
      Swal.fire('Profesional Eliminado', 'Profesional eliminado exitosamente', 'success');
    })
  }

  regresar(){
    this.router.navigate(['admin'])
  }
}
