import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeService 
{
  private apiBaseUrl = environment.apiBaseUrl; 
  /* emisor */
  recipeSelected = new EventEmitter<Recipe>();
  
  
constructor(private shoppingListService: ShoppingListService,private http: HttpClient) { }
 
  getRecipes2(query: string) 
  {
    const apiKey=environment.apiKey;
    const endpoint=environment.endpoint;

    const params = new HttpParams()
    .set('apiKey', apiKey)
    .set('ingredients', query)
    .set('number', '1');

    console.log("ServicioRecipe: ",this.http.get(`${this.apiBaseUrl}${endpoint}`, { params }));
    return this.http.get(`${this.apiBaseUrl}${endpoint}`, { params });
  }
  

  addIngredientsToShopList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    console.log("Ingredientes:",ingredients);
  }
 
}
