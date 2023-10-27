import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHero } from 'src/app/models/super-hero';
import { SupeHeroService } from 'src/app/services/supe-hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  title = 'Super Hero Plaza';
  heros : SuperHero[] = [];
  showImage = true;
  imageWidth = 50;
    imageMargin = 2;
  heroToEdit? : SuperHero;
  constructor(private superHeroService: SupeHeroService, private router: Router) {}

  ngOnInit(): void {
    this.superHeroService
    .getSuperHeros()
    .subscribe((result:SuperHero[])=> (this.heros = result));
  }

  initNewHero(){
    this.heroToEdit = new SuperHero;
  }

  editHero(hero: SuperHero){
   
this.heroToEdit = hero;
  }
}
