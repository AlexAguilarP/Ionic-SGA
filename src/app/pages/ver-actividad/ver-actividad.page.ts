import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../api/global.service';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-ver-actividad',
  templateUrl: './ver-actividad.page.html',
  styleUrls: ['./ver-actividad.page.scss'],
})
export class VerActividadPage implements OnInit {
  id: string;
  nombre: string;
  listado: {};
  listado2: {};
  customDayShortNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  constructor(private http: HTTP, public HTP: HttpClient, public global: GlobalService, public activatedRoute: ActivatedRoute) {
    this.cargarInformacion();
  }
  cargarInformacion() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.global.VAR_GLOBAL);
    // tslint:disable-next-line: max-line-length
    this.HTP.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=7&id=' + this.id + '').subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
    // tslint:disable-next-line: max-line-length
    this.HTP.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=8&id=' + this.id + '').subscribe(snap => {
      console.log(snap);
      this.listado2 = snap;
    });
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }


}
