import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
/* emiter para indicar el componente seleccionado 
  Output decorator para que pueda ser escuchado desde fuera (desde el parent component).*/
  @Output() navbarItemSelected = new EventEmitter<string>();
 
  /* recibe un string del menu de navegación recipes o shopping-list en navBarItem*/
  onSelect(navBarItem: string) 
  {
    this.navbarItemSelected.emit(navBarItem);/* emitimos el parámetro navbarItem.  */
  }
}

/* según lo selccionado en la barra de navegación, se pasara al appcomponent para que con
el elemento seleccionado muestre el component apropiado */