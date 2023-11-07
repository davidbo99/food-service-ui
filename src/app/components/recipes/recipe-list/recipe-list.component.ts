import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit 
{
  @Output() recipeSelected = new EventEmitter<RecipeListComponent>();
  @Output() wSelected = new EventEmitter<RecipeListComponent>();
  /* arreglo del tipo Modelo Recipe donde se encuentran los elementos de la receta */
  /* contenido estático dentro del arreglo*/
recipes: Recipe[] | undefined; 
resultadosRecetas: any;
qry: string = "";

 /* En el constructor del recipe-list.component.ts, inyectamos el servicio, lo importamos y lo 
 convertimos en una propiedad usando la palabra clave private */
constructor(private recipeService: RecipeService){ }
 
ngOnInit() {
  /* Inicializamos el servicio en el ngOnInit, asignándoselo como valor a la propiedad recipes */
  /* Desde el servicio, accedemos al método getRecipes(). Esta es la manera de obtener la copia
   del array recipes que hemos creado en el servicio */
  //this.recipes = this.recipeService.getRecipes();
  
}
/* Muestra la lista de recetas devueltas por la api */
buscarRecetas(query: string) 
{
  this.recipeService.getRecipes2(query)
    .subscribe(data => {
      this.resultadosRecetas = data;
      console.log("Mostrar: ",this.resultadosRecetas);
    });
}

onSelected() 
  {
     this.recipeService.recipeSelected.emit(this.resultadosRecetas); 
    console.log("En onSelected RecipeList: ",this.resultadosRecetas);
  }
}


