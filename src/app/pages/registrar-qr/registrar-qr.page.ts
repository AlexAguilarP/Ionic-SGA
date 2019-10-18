import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-registrar-qr',
  templateUrl: './registrar-qr.page.html',
  styleUrls: ['./registrar-qr.page.scss'],
})
export class RegistrarQRPage implements OnInit {

  datocodificado: any;
  datoscaneado: {};

  constructor(public barcode:BarcodeScanner) { }
  Encode()
  {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.datocodificado).then(
      encodedData => {
        this.datocodificado = encodedData;
      },
      err => {
        console.log("Un error ha ocurrido: " + err);
      }
    );
  }
  Scan()
  {
    this.barcodeScanner.scan().then(barcodeData => {
      this.datoscaneado = barcodeData;
    })
    .catch(err => {
      console.log("Error", err);
    });
  }
  ngOnInit() {
  }

}
