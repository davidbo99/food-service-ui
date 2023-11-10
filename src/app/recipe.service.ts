import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { APIResponse, Recipe } from 'src/recipes';
import { environment } from 'src/environments/environment.development';
//import { environment } from 'src/environments/env';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  //private apiBaseUrl = environment.apiBaseUrl;
  private apiBaseUrl = 'https://api.spoonacular.com/';
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private http: HttpClient) { 
  }

  //Llamado directo a la api para obtener listado de recetas.
  //Esta función devuelve un observable de un arreglo 'Recipe' haciendo llamado a la API de recetas.
  //'map' extrae el arreglo de recetas de la respuesta o response.

  // getAllRecipes(): Observable<Recipe[]> {
  //   return this.http.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=0518ea84a2aa45f3adf42b403ac072f9')
  //     .pipe(
  //       map((response: any) => response.results)
  //     );
  // }

  //Inyectar servicio al componente para cargar los datos desde el endpoint.
  //Usando variables contenidas en el archivo env.ts
  // getAllRecipes(): Observable<APIResponse> {
  //   return this.http.get<APIResponse>(`${environment.API_URL}/recipe-list`)
  //     .pipe(
  //       tap(response => console.log(response)),
  //       // map((response: any) => response.results)
  //     );
  // }

  //Mapear respuesta. Retornar respuesta como any y adaptar la respuesta a la interfaz apiResponse
  //Se retorna el objeto con results...
  /* getAllRecipes(): Observable<APIResponse> {
    return this.http.get<any>(`${environment.API_URL}/recipe-list`) 
      .pipe(
        map(response => {
          return {
            results: response
          } as APIResponse;  
        })
      );
  } */
  
  
  getRecipes2(query: string) 
  {

  const apiKey = '90e1458de33f4b1e9a2c4910a90d44e6';  
  const endpoint = 'recipes/findByIngredients';
    /* const apiKey=environment.apiKey;
    const endpoint=environment.endpoint; */

    const params = new HttpParams()
    .set('apiKey', apiKey)
    .set('ingredients', query)
    .set('number', '3');

    console.log("ServicioRecipe: ",this.http.get(`${this.apiBaseUrl}${endpoint}`, { params }));
    return this.http.get(`${this.apiBaseUrl}${endpoint}`, { params });
  }
}