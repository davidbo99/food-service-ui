
import { Ingredient } from '../shared/ingredient.model';
 
export class Recipe 
{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
 
  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.ingredients = ingredients;
  }
}

/* Estos elementos seran cargados en el arreglo recipe del recipe-list.component.ts */
/* como deberá tener también ingredientes, introduciremos un modelo dentro de otro. */