export class OasisModel {
  id?: number;
  nombre: string;
  longitud: number;
  latitud: number;
  agua: number
  destacado: boolean;

  constructor() {
    this.nombre = '';
    this.longitud = 0;
    this.latitud = 0;
    this.agua = 0;
    this.destacado = true;
  }
}
