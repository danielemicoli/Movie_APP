import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestComponent } from './latest/latest.component';
import { MainComponent } from './main/main.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path:'home',component:MovielistComponent},
  {path:'home',component:MainComponent},
  {path:'lastest',component:LatestComponent},


  {path: 'home/:id/info', component: MovieInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
