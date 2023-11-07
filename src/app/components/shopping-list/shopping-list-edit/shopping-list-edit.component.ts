import { Component, ElementRef,  ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/components/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent 
{
  /* propiedad nameInputRef, de tipo ElementRef con decorador @ViewChild con la local reference nameInput del html */
  /* añadir un segundo argumento (obligatorio en Angular 8) al @ViewChild ({static: false}). */
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;
 
 
 constructor(private shoppingListService: ShoppingListService) { }
 
  ngOnInit() {
  }
 
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
/* ViewChild en Angular es un decorador que se utiliza para acceder a un elemento del DOM 
(Document Object Model) o a un componente hijo desde un componente padre. */

/* La propiedad ElementRef en Angular es una referencia directa al elemento DOM asociado a un
 componente. ElementRef es una clase que se utiliza para acceder al elemento nativo del DOM 
 dentro de un componente Angular. Esto es útil cuando necesitas interactuar directamente con el
  elemento HTML en tu plantilla. */
  /* captura el valor del input element  (local reference name input). Esto lo hacemos accediendo a la value del 
  nameInputRef a través de su propiedad nativeElement. Este valor se pasa a la isntancia newIngredient*/
