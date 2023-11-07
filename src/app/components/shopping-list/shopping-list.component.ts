import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit 
{
 /* arreglo de ingredientes estáticos a mostrar */
  ingredients: Ingredient[] | undefined; 
  
  constructor(private shoppingListService: ShoppingListService) { }
 
  ngOnInit() 
  {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}

/* En el ngOnInit, llamamos al ShoppingListService y nos suscribimos al evento 
ingredientsChanged. Con esto, lo que estamos haciendo es crear una sistema para detectar cada 
vez que el array de ingredientes cambie (porque añadamos algún ingrediente), dándole ese nuevo 
valor a la propiedad ingredients. */
