//FROM MEAN - STACK - EXAMPLE
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, Subject, tap } from 'rxjs';
// import { Recipe } from './recipe';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private url = 'http://localhost:1337/api';
//   private recipes$: Subject<Recipe[]> = new Subject();
//   constructor(private httpClient: HttpClient) { }

//   private refreshRecipes() {
//     this.httpClient.get<Recipe[]>(`${this.url}/recipes/getAll`)
//       .subscribe(recipes => {
//         this.recipes$.next(recipes);
//       });
//   }

//   getRecipes(): Subject<Recipe[]> {
//     this.refreshRecipes();
//     return this.recipes$;
//   }
// }

//FROM https://blog.quadiontech.com/angular-tutorial-by-example-rest-api-httpclient-get-components-services-ngfor-63e457e6de1c
// 5ae23586b3da41168c17ec78424797d3
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, Subject, tap } from 'rxjs';
// import { Recipe } from './recipe';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   API_KEY = '5ae23586b3da41168c17ec78424797d3'
//   private url = 'http://localhost:1337/api';
//   private recipes$: Subject<Recipe[]> = new Subject();
//   constructor(private httpClient: HttpClient) { }

//   public getRecipes() {
//     return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`)
//   }
// }

// From AngularPractice
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:1337/api/recipes/getAll';
  constructor() {

  }
  async getRecipes(): Promise<any>{
    const data = await fetch(`${this.url}`);
    console.log("hey there")
    console.log(data)
    return data.json();
  }
}
