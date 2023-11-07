import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})

export class RecipeItemComponent 
{
	/* @Input decorador para poder obtener el valor desde afuera, corrige el error en el html */
  @Input()  recipe!: Recipe;
 /* No se le asigna valor pues se obtiene desde el parentcomponent, 
 con ! se evita   que se marque como error si no tiene un valor definido */
	
 /* inyectamos el servicio en el constructor */
 constructor(private recipeService: RecipeService) {}
                   
  ngOnInit() {}
                   
  onSelected() 
  {
    this.recipeService.recipeSelected.emit(this.recipe);
    console.log("En onSelected RecipeItem: ",this.recipeService.recipeSelected.emit(this.recipe));
  }
/* Desde el método onSelected, llamaremos al servicio para acceder a nuestro event emitter, y 
emitimos la propiedad recipe, porque esa es la propiedad que el usuario ha seleccionado. */
}

