import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { GlobalService } from 'src/app/api/global.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  listado: {};
  constructor(public http: HttpClient, public toastController: ToastController, public global: GlobalService) {
    this.cargarInformacion();

  }

  ngOnInit() {
  }
  cargarInformacion() {
    // tslint:disable-next-line: max-line-length
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=1&id_lista=' + this.global.ID_LISTA + '').subscribe(snap => {
      console.log(snap);
      this.presentToast('Lista Cargada');
      this.listado = snap;
    }, error => {
      console.log(error);
      this.presentToast('Error al Cargar la Lista');
    });
  }
  async presentToast(mess: string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      // tslint:disable-next-line: max-line-length
      this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=1&id_lista=' + this.global.ID_LISTA + '').subscribe(snap => {
        console.log(snap);
        this.listado = snap;
      });
    }, 2000);
  }
}
