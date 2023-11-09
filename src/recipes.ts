//Defino la estructura de un solo elemento del objeto.
export interface Recipe {
  image: string;
  title: string;
   
}

//Defino la respuesta obtenida de la API contenido en un array(varias recetas)
export interface APIResponse {
  results: Recipe[];  
}