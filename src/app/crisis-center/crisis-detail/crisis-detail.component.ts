import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.crisis = data.crisis;
      this.editName = data.crisis.name;
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    console.log('save');
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    console.log('detail - canDeactivate');
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    console.log('gotoCrises-one');
    let crisisId = this.crisis ? this.crisis.id : null;
    console.log('gotoCrises-two');
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    });
    console.log('gotoCrises-three');
  }
}
