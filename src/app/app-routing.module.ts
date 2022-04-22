import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';

const routes: Routes = [

  { path: 'movie', component: MovieComponent },
  { path: 'actor', component: ActorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
