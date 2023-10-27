import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { HeroListComponent } from './HeroList/hero-list/hero-list.component';
import { AddHeroComponent } from './AddHero/add-hero/add-hero.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component: HomeComponentComponent},
  {path: 'heroList', component: HeroListComponent},
  {path: 'home/register', component: RegisterComponent},
  {path: 'addHero', component: AddHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
