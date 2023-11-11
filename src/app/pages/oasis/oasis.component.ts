import { Component } from '@angular/core';
import { OasisModel } from 'src/app/models/oasis.model';
import { OasisService } from 'src/app/services/oasis.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-oasis',
  templateUrl: './oasis.component.html',
  styleUrls: ['./oasis.component.css']
})
export class OasisComponent {

  oasis: OasisModel[] = [];
  filtro: any;
  agua: number = 0;
  latitud: number = 0;
  longitud: number = 0;
  formFiltro: any;
  notFound: boolean = false;

  constructor(private oasisService: OasisService) { }

  ngOnInit(): void {
    this.formFiltro = new FormGroup({
      agua: new FormControl(0, [Validators.required, Validators.min(1)]),
      latitud: new FormControl(0, [Validators.required, Validators.min(1)]),
      longitud: new FormControl(0, [Validators.required, Validators.min(1)])
    })
    this.getOasis();
  }

  get f() {
    return this.formFiltro.controls;
  }

  getOasis() {
    Swal.fire('Espere por favor...');
    Swal.showLoading();
    this.oasisService.getOasis().subscribe(res => {
      Swal.close();
      Swal.hideLoading();
      this.oasis = res;
      if (this.oasis.length === 0) {
        this.notFound = true
      } else {
        this.notFound = false
      }
    })
  }

  changeFiltro(e: any) {
    this.filtro = parseInt(e.target.value);
    if (this.filtro === 3) {
      this.getOasis();
    }
  }

  filtrarAgua() {
    Swal.fire('Espere por favor...');
    Swal.showLoading();
    this.oasisService.getOasisByAgua(this.formFiltro.value.agua).subscribe(res => {
      Swal.close();
      Swal.hideLoading();
      this.oasis = res;
      if (this.oasis.length === 0) {
        this.notFound = true
      } else {
        this.notFound = false
      }
    });
  }

  filtrarLatLong() {
    Swal.fire('Espere por favor...');
    Swal.showLoading();
    this.oasisService.getOasisByLatLong(this.formFiltro.value.latitud, this.formFiltro.value.longitud).subscribe(res => {
      Swal.close();
      Swal.hideLoading();
      this.oasis = res;
      if (this.oasis.length === 0) {
        this.notFound = true
      } else {
        this.notFound = false
      }
    });
  }

}
