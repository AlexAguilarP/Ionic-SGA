import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public VAR_GLOBAL: string;
  public COD_USUARIO: string;
  constructor() {
    // this.VAR_GLOBAL = '192.168.137.1';
    this.VAR_GLOBAL = 'localhost';
    this.COD_USUARIO = 'APA9943660';
  }
}
