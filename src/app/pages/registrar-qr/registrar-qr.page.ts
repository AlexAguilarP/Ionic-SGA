import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../api/global.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registrar-qr',
  templateUrl: './registrar-qr.page.html',
  styleUrls: ['./registrar-qr.page.scss'],
})
export class RegistrarQRPage implements OnInit {
  listado: {};
  datocodificado: any;
  codigo: string;
  datoscaneado: {};

  // tslint:disable-next-line: max-line-length
  constructor(public barcode: BarcodeScanner, public http: HttpClient, public global: GlobalService, public toastController: ToastController) {
    this.cargarInformacion();
  }
  cargarInformacion() {
    // tslint:disable-next-line: max-line-length
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=2&codigo_usuario=' + this.codigo + '').subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }
  CodificarTexto() {
    this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.datocodificado).then(
      encodedData => {
        this.datocodificado = encodedData;
      },
      err => {
        console.log('Un error ha ocurrido: ' + err);
      }
    );
  }
  LeerCode() {
    this.barcode.scan().then(barcodeData => {
      this.datoscaneado = barcodeData;
      // tslint:disable-next-line: no-string-literal
      this.codigo = this.datoscaneado['text'];
    })
      .catch(err => {
        console.log('Error', err);
      });
  }
  registrarAsistencia() {
    // tslint:disable-next-line: max-line-length
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=4&codigo_usuario=' + this.codigo + '&id_lista=' + this.global.ID_LISTA + '').subscribe(snap => {
      console.log(snap);
      this.presentToast('Registrado con éxito');
    }, error => {
      console.log(error);
      this.presentToast('Error al Registrar');
    });
  }
  async presentToast(mess: string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
