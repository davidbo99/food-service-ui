import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'recipes', component: RecipeListComponent},
  { path: 'recipe-list', component: RecipeListComponent },
  {path: 'recipe-detail', component: RecipeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
