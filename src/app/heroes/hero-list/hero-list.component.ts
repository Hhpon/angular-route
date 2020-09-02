import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../../message.service';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;
  selectedHero: Hero;

  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      })
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
