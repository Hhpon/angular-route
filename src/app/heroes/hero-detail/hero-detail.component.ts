import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero$: any;
  hero: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit(): void {
    console.log('detail');
    this.hero$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => {
          console.log(params.get('id'));
          console.log(params.has('id'));
          console.log(params.getAll('id'));
          console.log(params.keys);
          this.hero.id = params.get('id');
          // return this.service.getHero(params.get('id'));
        })
      )
      .subscribe();
    const od = this.route.snapshot.paramMap.get('id');

    console.log(od);
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
