import { Component, Renderer2  } from '@angular/core';
import { Personas } from 'src/app/core/personas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  
  
  constructor(private renderer: Renderer2) {}
  //funcion para fondo de imagen en el home
  ngOnInit() {
    
  }
}
