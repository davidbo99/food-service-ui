import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService 
{
  constructor() {}
  /* emitirá un array de nuestro modelo Ingredient */
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = 
  [
    new Ingredient('bananas', 3),
    new Ingredient('strawberries', 10)
  ];
 
  getIngredients() {
    return this.ingredients.slice();
  }

  /* espera un ingrediente. Dentro del método, accedemos a la propiedad ingredients y añadimos 
  el nuevo ingrediente al array. */
  addIngredient(ingredient: Ingredient) 
  {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

/* En el método addIngredient, al añadir un ingrediente al array, lo modifica, llamamos al
event emitter y emitimos nuestro evento, que será una copia del array ingredients. */

