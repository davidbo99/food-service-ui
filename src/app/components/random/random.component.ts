import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {
  randomRecipe: any = {};

  constructor(private http: HttpClient) {}

  fetchRandomRecipe() {
    this.http.get('http://127.0.0.1:8000/random_recipes/random_recipes/').subscribe(
      (data: any) => {
        this.displayRecipe(data);
      },
      (error) => {
        console.error('Error fetching random recipe:', error);
      }
    );
  }
  

  displayRecipe(recipeData: any) {
    this.randomRecipe = recipeData;
  }
}
