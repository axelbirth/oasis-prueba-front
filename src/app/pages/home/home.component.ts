import { Component } from '@angular/core';
import { OasisModel } from 'src/app/models/oasis.model';
import { OasisService } from 'src/app/services/oasis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  oasis: OasisModel[] = [];

  constructor(private oasisServices: OasisService) { }

  ngOnInit(): void {
    this.getOasisDestacados();
  }

  getOasisDestacados() {
    Swal.fire('Espere por favor...');
    Swal.showLoading();
    this.oasisServices.getOasisDestacados().subscribe(res => {
      Swal.close();
      Swal.hideLoading();
      this.oasis = res;
    });
  }

}
