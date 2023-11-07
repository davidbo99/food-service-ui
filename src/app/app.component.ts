import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integrador-interface';
  loadedNavbarItem = 'recipes';

  /*Por parámetro pasamos la información sobre a qué sección específica vamos a navegar, es decir,
  a recipes o a shopping list. Al parámetro lo llamamos navItem, que será de tipo string.  */ 
  
  onNavigate(navItem: string) 
  {
    this.loadedNavbarItem = navItem;/* variable loadedNavbarItem le asignamos el valor de recipes */
  }
  }
