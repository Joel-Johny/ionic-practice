import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: 'full'
  },
  {
    path: 'recipe',
    children:[
      {path:'',loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)},
      {path:':recipeId',loadChildren: () => import('./recipe/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)},

    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
