import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Get the routing components
import { MainGreetingComponent } from '../main-greeting/main-greeting.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: MainGreetingComponent }
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }