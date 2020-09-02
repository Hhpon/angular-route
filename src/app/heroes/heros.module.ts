import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list/hero-list.component';

import { HerosRoutingModule } from './heros-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [CommonModule, HerosRoutingModule, FormsModule],
})
export class HerosModule {}
