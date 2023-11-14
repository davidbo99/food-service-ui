import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from 'src/recipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] | undefined; 
  resultadosRecetas: any;
  qry: string = "";
  qry2: string = "";
  qry3: string = "";
  qry4: string = "";
  qry5: string = "";
  qry6: string = "";
  qry7: string = "";
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  //Obtener recetas por Ingredientes
  buscarRecetas() {
    // Crear una lista de ingredientes a partir de las variables qry, qry2, etc., correspondientes a cada input del template.
    const ingredients = [this.qry, this.qry2, this.qry3, this.qry4, this.qry5].filter(Boolean).join(',');

    this.recipeService.getRecipesByIngredients(ingredients)
      .subscribe(data => {
        this.resultadosRecetas = data;
        console.log("Mostrar: ", this.resultadosRecetas);
      });
  }

  //LLamado al método selectRecipe del servicio.
  onSelected(selectedRecipe: Recipe) {
    this.recipeService.selectRecipe(selectedRecipe);
    console.log("En onSelected RecipeList: ", selectedRecipe);
  }

  //Obtener recetas por nutrientes
  buscarNutrientes() {
    const min_Calories = this.qry6;
    const max_Calories = this.qry7
    this.recipeService.getRecipesByNutrients(min_Calories, max_Calories)
      .subscribe(data => {
        this.resultadosRecetas = data;
        console.log("Mostrar Nutrientes rl: ",this.resultadosRecetas);
      });
  }
}
  
