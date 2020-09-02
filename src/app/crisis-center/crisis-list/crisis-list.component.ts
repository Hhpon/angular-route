import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { MessageService } from '../../message.service';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
  heroes$: Observable<Crisis[]>;
  selectedId: number;
  selectedHero: Crisis;

  heroes: Crisis[];

  constructor(
    private service: CrisisService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }

  onSelect(hero: Crisis): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // getHeroes(): void {
  //   this.service.getCrisis().subscribe((heroes) => (this.heroes = heroes));
  // }
}
