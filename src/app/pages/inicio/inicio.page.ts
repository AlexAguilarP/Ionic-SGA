import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../api/global.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  textoBuscar: any;
  listado: {};
  constructor(public global: GlobalService, public http: HttpClient) {
    this.cargarInformacion();

  }
  cargarInformacion() {
    // tslint:disable-next-line: max-line-length
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=6').subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=6').subscribe(snap => {
        console.log(snap);
        this.listado = snap;
      });
    }, 2000);
  }
  buscar(event) {
    this.textoBuscar = event.detail.value;
    console.log(event);
  }
  ngOnInit() {
  }

}
