import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; 
  //al importar el elementref da un error en el txtbuscar, pero es porque typescrip esta de manera estricta
  //y quiere asegurarse de que el input no traiga valores nulos, Non-null assertion operator
  constructor(private gifsService: GifsService){
  
  }
  buscar() {

  const valor= this.txtBuscar.nativeElement.value;
  if(valor.trim().length===0){
  return;
  }
  //console.log(valor);
  this.gifsService.buscarGifs(valor);
  this.txtBuscar.nativeElement.value= '';
}

}
