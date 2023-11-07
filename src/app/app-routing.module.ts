import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RandomComponent } from './components/random/random.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'randomRecipe', component: RandomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
