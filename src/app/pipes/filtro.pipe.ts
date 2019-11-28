import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  ts: string;
  transform(arreglo: any[], texto: string, columna: string): any[] {
    // tslint:disable-next-line: curly
    if (!texto) return arreglo;
    return arreglo.filter(item => item[columna].toLowerCase().includes(texto.toLowerCase()));
  }

}
