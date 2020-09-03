import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    return this.crises$;
  }

  getCrisis(id: number) {
    return this.getCrises().pipe(
      map((crises) => crises.find((crisis) => crisis.id === +id))
    );
  }
}
