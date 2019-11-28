import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/api/global.service';
import { LocationStrategy } from '@angular/common';
import { ToastController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;
  pass: string;
  listado: {};

  // tslint:disable-next-line: max-line-length
  constructor(public http: HttpClient, private locationStrategy: LocationStrategy, public toastController: ToastController, public router: Router, public global: GlobalService, private menu: MenuController) {
    this.preventBackButton();
    this.menu.enable(false, 'Menu');
    this.menu.enable(false, 'menuDer');
  }

  ngOnInit() {
  }

  ingresar() {
    // tslint:disable-next-line: max-line-length
    this.http.get('http://' + this.global.VAR_GLOBAL + '/ionic/Ionic-SGA/sga/api/opciones.php?opcion=11&usuario=' + this.usuario + '&pass=' + this.pass + '').subscribe(snap => {
      console.log(snap);
      this.listado = snap;
      this.global.DATOS_USUARIO = this.listado[0];
      // tslint:disable-next-line: no-string-literal
      this.presentToast('Bienvenido ' + this.global.DATOS_USUARIO['nombre_de_usuario']);
      console.log(this.global.DATOS_USUARIO);
      this.menu.enable(true, 'Menu');
      this.menu.enable(true, 'menuDer');
      this.router.navigateByUrl('inicio');
    }, error => {
      console.log(error);
      this.presentToast('Correo o Contraseña invalidos');
    });
  }
  async presentToast(mess: string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }
  preventBackButton() {
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }

}
