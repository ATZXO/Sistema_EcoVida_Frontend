import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../../services/actividad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-actividades',
  standalone: false,
  templateUrl: './load-actividades.component.html',
  styleUrl: './load-actividades.component.css'
})
export class LoadActividadesComponent implements OnInit{

  actividades : any = [
  
    ]
  
    constructor(private actividadService:ActividadService) { }
  
    ngOnInit(): void {
      this.actividadService.listarActividadesPorEstado('ACTIVO').subscribe(
        (dato:any) => {
          this.actividades = dato;
          console.log(this.actividades);
        },
        (error) => {
          console.log(error);
          Swal.fire('Error','Error al cargar las actividades','error');
        }
      )
    }

}
