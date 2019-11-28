import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/api/global.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-act-designada',
  templateUrl: './act-designada.page.html',
  styleUrls: ['./act-designada.page.scss'],
})
export class ActDesignadaPage implements OnInit {

  textoBuscar: any;
  listado: {};
  constructor(public global: GlobalService, public http: HttpClient, public router: Router) {
    this.cargarInformacion();

  }
  cargarInformacion() {
    // tslint:disable-next-line: max-line-length no-string-literal
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=12&usuario=' + this.global.DATOS_USUARIO['codigo_usuario'] + '').subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }
  // tslint:disable-next-line: variable-name
  empezar_Registrar(Id_lista) {
    this.global.ID_LISTA = Id_lista;
    this.router.navigateByUrl('tabs/tab1');
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.cargarInformacion();
    }, 2000);
  }
  buscar(event) {
    this.textoBuscar = event.detail.value;
    console.log(event);
  }
  ngOnInit() {
  }

}
