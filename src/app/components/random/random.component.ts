import { Component, Renderer2  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {
  conection = environment.apiUrl;
  randomRecipe: any = {};

  constructor(private http: HttpClient, private renderer: Renderer2 ) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'background-class');
    document.body.style.backgroundImage = 'url(../../../../../assets/img/frandom.avif)'
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.height = '600px';
    document.body.style.width = '100%';
  }

  fetchRandomRecipe() {
    this.http.get(this.conection).subscribe(
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
