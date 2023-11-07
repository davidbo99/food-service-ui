/* export class Ingredient 
{
    public name: string;
    public amount: number;
   
    constructor(name: string, amount: number) 
    {
      this.name = name;
      this.amount = amount;
    }
  } */

  export class Ingredient {
    constructor(public name: string, public amount: number) { }
  }

  /* el objetivo de un modelo es definir qué características tendrá un cierto elemento 
  (un ingrediente, en este caso). En este contexto, determinaremos un nombre y una cantidad. 
  se usara en el arreglo ingredients en shopping-list component
  Aunque ahora declaradas como argumentos del constructor, name y amount siguen siendo 
  propiedades del modelo que podremos usar*/