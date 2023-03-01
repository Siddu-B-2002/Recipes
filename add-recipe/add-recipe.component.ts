import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit{

  addRecipeRequest: Recipe = {
    id:'',
    recipe:'',
    amount: 0,
    restaurant:'',
    city:''
  };

  constructor(private recipesService: RecipesService, private router:Router)
  {}
  ngOnInit(): void {
    
  }

  addRecipe()
  {
    this.recipesService.addRecipe(this.addRecipeRequest)
    .subscribe({
      next:(recipe) => {
        this.router.navigate([''])
      }
    });
  }

}
