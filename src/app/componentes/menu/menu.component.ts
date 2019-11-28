import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { GlobalService } from '../../api/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public barcode: BarcodeScanner, public global: GlobalService) { }

  ngOnInit() {}
  CodificarTexto() {
    // tslint:disable-next-line: no-string-literal
    this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.global.DATOS_USUARIO['codigo_usuario']).then(
      encodedData => {
      },
      err => {
        console.log('Un error ha ocurrido: ' + err);
      }
    );
  }

}
