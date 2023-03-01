import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{

  
  recipes: Recipe[]=[];

  constructor(private recipesService: RecipesService){}

  ngOnInit(): void {
    this.recipesService.getAllRecipes()
    .subscribe({
      next: (recipes) => {
        this.recipes = recipes;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}



// recipes:any;
//     baseURL : 'https://localhost:7179/api/RecipeOrders';
    
//     constructor(private ordersService: OrdersService,private http: HttpClient)
//     {
//     }
    
//     ngOnInit()
//     {
//       this.ordersService.getAllOrders()
//       .subscribe((res:any)=>{this.recipes=res});
//       // this.http.get(this.baseURL)
//       // .subscribe({
//       //   next: (recipe)=>{
//       //     this.recipes = recipe;
//       //     this.temp=true;
          
//       //   },
        
//       //   error: (response)=> {
//       //     console.log(response);
//       //   }
        
//       // })
//     }
