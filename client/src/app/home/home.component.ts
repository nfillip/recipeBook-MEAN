// FROM MEAN -STACK -EXAMPLE
// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
// import { Observable } from "rxjs";
// import { Recipe } from "../recipe";
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements OnInit{
//   recipes$: Observable<Recipe[]> = new Observable();
//   constructor(private apiService: ApiService){

//   }
//   ngOnInit(): void {
//     // this.apiService.getRecipes().subscribe((data) => {
//     //   this.recipes = data['recipes'];
//     // })
//     // console.log(this.recipes)
//     this.fetchRecipes();
//     console.log(this.recipes$)
//   }

//   private fetchRecipes(): void {
//     this.recipes$ = this.apiService.getRecipes();
//   }
// }

// FROM https://blog.quadiontech.com/angular-tutorial-by-example-rest-api-httpclient-get-components-services-ngfor-63e457e6de1c
// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
// import { Observable } from "rxjs";
// import { Recipe } from "../recipe";
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements OnInit{
//   recipes: any;
//   constructor(private apiService: ApiService){

//   }
//   ngOnInit(): void {
//     this.apiService.getRecipes().subscribe((data)=>{
//       this.recipes = data['recipes'];
//     });
//   }

// }

// AngularPractice
import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from "rxjs";
import { Recipe } from "../recipe";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recipeList: Recipe[] =[];
  apiService: ApiService = inject(ApiService);

  constructor(){
  this.fetchRecipes();
  }

  async fetchRecipes() {
    const newData = await this.apiService.getRecipes();
    this.recipeList = newData.results
    console.log("line 77");
    console.log(newData.results[0].title)
  }


}
