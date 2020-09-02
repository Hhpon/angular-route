import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMesComponent } from './compose-mes.component';

describe('ComposeMesComponent', () => {
  let component: ComposeMesComponent;
  let fixture: ComponentFixture<ComposeMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
