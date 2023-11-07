import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent 
{
  selectedRecipe: Recipe | undefined;
  resultadosRecetas: Recipe|undefined;
  constructor(private recipeService: RecipeService) { }
 
ngOnInit() 
{
  this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );

    this.recipeService.recipeSelected
    .subscribe(
      data => {
      this.resultadosRecetas = data;
      console.log("Mostrar: ",this.resultadosRecetas);
    });
}
}

