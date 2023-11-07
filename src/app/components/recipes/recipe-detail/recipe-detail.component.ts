import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit
{
  @Input() recipe!: Recipe;
  @Input() rlc!: RecipeListComponent;
  shDetail!: Observable<any>;
  constructor(private recipeService: RecipeService) { }
 
ngOnInit() {
   this.shDetail = this.recipeService.recipeSelected;
  console.log("En ngOnit recipedetail: ",this.recipeService.recipeSelected);
}
 
onAddToShoppingList() {
  this.recipeService.addIngredientsToShopList(this.recipe.ingredients);
}

 

}
