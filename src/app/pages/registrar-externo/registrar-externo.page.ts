import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/api/global.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-externo',
  templateUrl: './registrar-externo.page.html',
  styleUrls: ['./registrar-externo.page.scss'],
})
export class RegistrarExternoPage implements OnInit {
  listado: {};
  externo: [];
  ci: string;
  nombre: string;
  ape1: string;
  ape2: string;
  correo: string;
  telf: string;
  constructor(public http: HttpClient, public global: GlobalService, public toastController: ToastController) {

  }
  cargarInformacion() {
    // tslint:disable-next-line: max-line-length
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=5&ci=' + this.ci + '').subscribe(snap => {
      console.log(snap);
      this.listado = snap;
      this.externo = this.listado[0];
      console.log(this.externo);
      // tslint:disable-next-line: triple-equals
      // tslint:disable-next-line: no-string-literal
      if (Object.entries(this.listado).length === 0) {
        this.presentToast('Persona No Encontrada');
      } else {
        // tslint:disable-next-line: no-string-literal
        this.nombre = this.externo['nombre_externo'];
        // tslint:disable-next-line: no-string-literal
        this.ape1 = this.externo['apellido_pat_externo'];
        // tslint:disable-next-line: no-string-literal
        this.ape2 = this.externo['apellido_mat_externo'];
        // tslint:disable-next-line: no-string-literal
        this.correo = this.externo['correo_externo'];
        // tslint:disable-next-line: no-string-literal
        this.telf = this.externo['telefono_externo'];
        this.presentToast('Persona Encontrada');
      }

    }, error => {
      console.log(error);
      this.presentToast('Persona no encontrada');
    });
  }
  registrar() {
    console.log(this.ape2);
    // tslint:disable-next-line: max-line-length
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=9&id_actividad=1&ci=' + this.ci + '&nombre=' + this.nombre + '&apeP=' + this.ape1 + '&apeM=' + this.ape2 + '&correo=' + this.correo + '&telefono=' + this.telf + '').subscribe(snap => {
      console.log(snap);
      this.presentToast('Registrado con éxito');
    }, error => {
      console.log(error);
      this.presentToast('Error al Registrar');
    });
  }
  ngOnInit() {
  }
  async presentToast(mess: string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }
}
