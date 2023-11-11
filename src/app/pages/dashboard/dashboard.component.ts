import { Component } from '@angular/core';
import { OasisModel } from 'src/app/models/oasis.model';
import { OasisService } from 'src/app/services/oasis.service';
import Swal from 'sweetalert2'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  oasis: OasisModel[] = [];
  formOasis: any;
  oas: OasisModel = new OasisModel();

  constructor(private oasisService: OasisService) { }

  ngOnInit(): void {
    this.formOasis = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/[A-Za-z0-9]/)]),
      latitud: new FormControl(0, [Validators.required, Validators.min(1)]),
      longitud: new FormControl(0, [Validators.required, Validators.min(1)]),
      agua: new FormControl(0, [Validators.required, Validators.min(1)]),
      destacado: new FormControl(true, [Validators.required])
    });
    this.getOasis();
  }

  get f() {
    return this.formOasis.controls;
  }

  submitOasis() {
    this.oasisService.saveOasis(this.formOasis.value)
      .subscribe(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro Exitoso",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      }, err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  }

  getOasis() {
    Swal.fire('Espere por favor...');
    Swal.showLoading();
    this.oasisService.getOasis().subscribe(res => {
      Swal.close();
      Swal.hideLoading();
      this.oasis = res;
    });
  }

}
