
export interface Recipe {
  id: number;
  title: string;
  image: string;
  dairyFree: string;
  glutenFree:boolean;
  ketogenic: boolean;
  vegan : boolean;
  instructions: string;
  extendedIngredients: Ingredient[];
}

export interface Ingredient {
  aisle: string;
  
}
