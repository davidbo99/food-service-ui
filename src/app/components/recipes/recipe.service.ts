import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService 
{
  
  private apiBaseUrl = 'https://api.spoonacular.com/';//url de la api
  /* emisor */
  recipeSelected = new EventEmitter<Recipe>();
  
  
constructor(private shoppingListService: ShoppingListService,private http: HttpClient) { }
 
  getRecipes2(query: string) {
    const apiKey = '1bd0ad552aae492db8c90d3ee8114ea2'; // api_key clave de API de Spoonacular
    const endpoint = 'recipes/findByIngredients';

    const params = new HttpParams()
    .set('apiKey', apiKey)
    .set('ingredients', query)
    .set('number', '2');

    console.log("ServicioRecipe: ",this.http.get(`${this.apiBaseUrl}${endpoint}`, { params }));
    return this.http.get(`${this.apiBaseUrl}${endpoint}`, { params });
  }
  

  addIngredientsToShopList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    console.log("Ingredientes:",ingredients);
  }
 
}
