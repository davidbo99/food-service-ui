import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
 
@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective 
{
    isOpen = false;
    constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('click')
    toggleMenu() 
    {
        if (!this.isOpen) 
        {
            // show the menu
            this.renderer.addClass(this.eleRef.nativeElement.nextElementSibling, 'show');
        } 
        else 
        this.renderer.removeClass(this.eleRef.nativeElement.nextElementSibling, 'show');
        document.addEventListener('click', event => {
            if (event.target !== this.eleRef.nativeElement) {
              this.isOpen = false;
              this.renderer.removeClass(this.eleRef.nativeElement.nextElementSibling, 'show');
            }
          });
        
        // toggle the property
        this.isOpen = !this.isOpen;
 
    }
}

/* Usamos el decorador @Directive para especificar que estamos creando una directiva. */
/* Dentro del decorador, creamos el selector para definir de qué forma usaremos esta directiva, 
que en este caso tomará la forma de un atributo HTML, así que la escribimos entre corchetes. 
La llamamos appDropdown. */

/* En la directiva, creamos una propiedad de tipo boolean llamada isOpen, en referencia al 
estado inicial en que queremos que esté nuestro dropdown. Como queremos que esté cerrado, 
isOpen debería ser false. */

/* En el constructor inyectamos dos propiedades de tipo ElementRef y Renderer2. 
Podemos transformarlas en propiedades de TS añadiéndoles la keyword "private" delante */