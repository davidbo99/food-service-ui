import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Recipe } from 'src/recipes';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // private apiBaseUrl = 'https://api.spoonacular.com/';
  // private apiKey = '90e1458de33f4b1e9a2c4910a90d44e6';
  private apiBaseUrl = environment.apiBaseUrl;
  private recipeSelectedSubject = new BehaviorSubject<Recipe | null>(null);
  recipeSelected$ = this.recipeSelectedSubject.asObservable();

  //Selección de receta
  selectRecipe(recipe: Recipe) {
    this.recipeSelectedSubject.next(recipe);
  }

  constructor(private http: HttpClient) {}

  //solicitud HTTP por ingredientes.
  getRecipesByIngredients(ingredients: string) {
 
    const endpoint = 'recipes/findByIngredients';
    const apiKey = environment.apiKey;
    
    const params = new HttpParams()
    .set('apiKey', apiKey)
    .set('ingredients', ingredients)
    .set('number', '20');
    console.log("ServicioRecipe: ",this.http.get(`${this.apiBaseUrl}${endpoint}`, { params }));
    return this.http.get<Recipe>(`${this.apiBaseUrl}${endpoint}`, { params });
  }

  //solicitud HTTP por información nutricional.
  getRecipesByNutrients(min_calories: string, max_calories: string){
    const endpoint2= 'recipes/findByNutrients';
    const apiKey = environment.apiKey;
    const params = new HttpParams()
      .set('apiKey', apiKey)
      .set('minCalories', min_calories)
      .set('maxCalories', max_calories)
      .set('number', '20');
  
    console.log("ServicioRecipe: ",this.http.get(`${this.apiBaseUrl}${endpoint2}`, { params }));
    return this.http.get(`${this.apiBaseUrl}${endpoint2}`, { params });
  }

  
//Obtener Detalle de la Receta
  getRecipeDetails(id: number): Observable<Recipe> {
    const endpoint = `recipes/${id}/information`;
    const apiKey = environment.apiKey;
    const params = new HttpParams().set('apiKey', apiKey);

    return this.http.get<Recipe>(`${this.apiBaseUrl}${endpoint}`, { params });
  }

}