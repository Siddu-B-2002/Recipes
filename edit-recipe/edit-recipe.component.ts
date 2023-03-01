import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit{
  recipeInfo: Recipe = {
    id:'',
    recipe:'',
    amount: 0,
    restaurant:'',
    city:''
  };

  constructor(private route: ActivatedRoute, private recipesService: RecipesService, private router: Router)
    {

    }

    ngOnInit()
    {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');

          if (id)
          {
            this.recipesService.getRecipe(id)
            .subscribe({
              next: (response) => {
                this.recipeInfo = response;
              }
            })
          }
        }
      })
    }

    updateRecipe()
    {
      this.recipesService.updateRecipe(this.recipeInfo.id, this.recipeInfo)
      .subscribe({
        next: (response) => {
          this.router.navigate([''])
        }
      })
    }

    deleteRecipe(id: string)
    {
      this.recipesService.deleteRecipe(id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['']);
        }
      })
    }
}
