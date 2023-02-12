import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mostrarMascota } from 'src/app/models/mostrar-mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {
  
  mascotas : mostrarMascota[] = [];
  constructor(private mascotaService: MascotaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarMascos()
  }

  cargarMascos(){
    this.mascotaService.obtenerMascotas().subscribe(datos=> {
      this.mascotas = datos
    })
  }

  nuevaMascota(){
    this.router.navigate(['mascotas/mascota'])
  }

  editarMascota(id_mascota: any){
    this.router.navigate(['mascotas/editarMascota', id_mascota])
  }

  eliminar(id_mascota: any){
    this.mascotaService.eliminarMasco(id_mascota).subscribe(resultado=> {
      this.cargarMascos()
      Swal.fire('Mascota Eliminada', 'Mascota eliminada exitosamente', 'success');
    })
  }

  regresar(){
    this.router.navigate(['admin']);
  }
}
