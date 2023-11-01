import { Component, Renderer2  } from '@angular/core';
import { Personas } from 'src/app/core/personas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  personas =  [...Personas]
  
  constructor(private renderer: Renderer2) {}
  //funcion para fondo de imagen en el home
  ngOnInit() {
    this.renderer.addClass(document.body, 'background-class');
    document.body.style.backgroundImage = 'url(../../../assets/img/fhome.jpg)'
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.height = '600px';
    document.body.style.width = '100%';
  }
}
