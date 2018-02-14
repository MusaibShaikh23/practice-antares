import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: ``,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department) {
    this.router.navigate(['/departments' , department.id ]);
  }
}
