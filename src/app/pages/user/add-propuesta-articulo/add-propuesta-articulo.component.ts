import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-propuesta-articulo',
  standalone: false,
  templateUrl: './add-propuesta-articulo.component.html',
  styleUrl: './add-propuesta-articulo.component.css'
})
export class AddPropuestaArticuloComponent implements OnInit {

  articulo = {
    titulo: '',
    descripcion: '',
    autor: '',
    rutaPdf: ''
  }
  cloudName = '****';
  uploadPreset = '***';
  archivoSeleccionado!: File;

  constructor(private articuloService: ArticuloService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.articulo.titulo.trim() == '' || this.articulo.titulo == null) {
      this.snack.open("El título es requerido !!", '', {
        duration: 3000
      })
      return;
    }

    if (!this.archivoSeleccionado) {
      Swal.fire('Error', 'Debe adjuntar un archivo PDF', 'error');
      return;
    }

    const nombreOriginal = this.archivoSeleccionado.name;
    const nombreForzado = nombreOriginal.endsWith('.pdf') ? nombreOriginal : `${nombreOriginal}.pdf`;

    const archivoConExtension = new File(
      [this.archivoSeleccionado],
      nombreForzado,
      { type: 'application/pdf' }
    );

    const formData = new FormData();
    formData.append('file', archivoConExtension, archivoConExtension.name);
    formData.append('upload_preset', this.uploadPreset);

    fetch(`https://api.cloudinary.../${this.cloudName}/***/***`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        this.articulo.rutaPdf = data.secure_url;
        this.guardarArticulo();
      })
      .catch(err => {
        console.error(err);
        Swal.fire('Error', 'Error al subir el archivo PDF a Cloudinary', 'error');
      });
  }

  guardarArticulo() {
    this.articuloService.agregarArticulo(this.articulo).subscribe(
      (dato: any) => {
        this.articulo = { titulo: '', descripcion: '', autor: '', rutaPdf: '' };
        Swal.fire('Artículo agregado', 'El artículo ha sido guardado con éxito', 'success');
        this.router.navigate(['/user-dashboard/articulos-user']);
      },
      (error) => {
        console.error(error);
        Swal.fire('Error', 'Error al guardar el artículo', 'error');
      }
    );
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.archivoSeleccionado = file;
    } else {
      Swal.fire('Error', 'Solo se permite archivos PDF', 'error');
    }
  }

}
