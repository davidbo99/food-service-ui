import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Observable } from 'rxjs';
import { Ingredient, Recipe } from 'src/recipes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit
{
  @Input() recipe!: Recipe;
  @Input() rlc!: RecipeListComponent;
  resultadosRecetas: any;
  selectedRecipe!: Recipe;
  selectedRecipeArray: any[] = [];
  // Ingredientes extendidos
  extendedIngredients: string[] = [];

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    
    this.recipeService.recipeSelected$.subscribe((selectedRecipe: Recipe | null) => {
      if (selectedRecipe) {
        this.selectedRecipe = selectedRecipe;
        console.log("Receta seleccionada en RecipeDetail:", this.selectedRecipe);
      }
      
    });
  }
 
ngOnInit() {
  this.recipeService.recipeSelected$.subscribe(selectedRecipe => {

    if (selectedRecipe) {
      this.selectedRecipe = selectedRecipe;
      this.loadRecipeDetails();
    }
  
  });
}

private loadRecipeDetails(): void {
  this.recipeService.getRecipeDetails(this.selectedRecipe.id).subscribe(details => {
    
    this.extendedIngredients = details.extendedIngredients
  .map((ingredient: any) => ingredient.aisle)
  .filter((value, index, self) => self.indexOf(value) === index);
    this.selectedRecipe = details;

    if (Array.isArray(this.extendedIngredients)) {
      console.log('La variable es un arreglo');
    }
    
    console.log("imprimo detalle de recetas",this.selectedRecipe)
  });
}
}