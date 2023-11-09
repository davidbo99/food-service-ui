import { Component, Renderer2 } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import {  APIResponse, Recipe } from 'src/recipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  
  //Definición de recipes
  //recipes: any[] = [];

  //Definición de recipes para obtener datos desde el endpoint.
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService,private renderer: Renderer2) { }

  ngOnInit() {
    this.getAllRecipes(); 
    
    //implementación de elemento DOM en Angular para agregar background.
    this.renderer.addClass(document.body, 'background-class');
    document.body.style.backgroundImage = 'url(../../../assets/img/fhome.jpg)'
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.height = '600px';
    document.body.style.width = '100%';
  }

  //Funciòn para obtener recetas conectándose al endpoint
  getAllRecipes() {
    this.recipeService.getAllRecipes()
      .subscribe({
        next: (response: APIResponse) => {
          console.log('Recibo datos del servicio:', response);
          this.recipes = response.results;
          console.log(response)
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }

  //Llamada a getAllRecipes desde el servicio para obtener un arreglo de recetas Recipe[]
  //Y asignándola a la variable recipes.
  //  getAllRecipes(){
  //   this.recipeService.getAllRecipes()
  //   .subscribe(
  //     (recipes: Recipe[]) => {
  //       this.recipes = recipes;
  //     }  
  //   );
  // }
  
}
