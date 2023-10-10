import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryandmarkService } from 'src/app/services/categoryandmark.service';

@Component({
  selector: 'app-view-cat-and-mark',
  templateUrl: './view-cat-and-mark.component.html',
  styleUrls: ['./view-cat-and-mark.component.sass'],
})
export class ViewCatAndMarkComponent implements OnInit {
  categories$: Observable<any[]> = new Observable<any[]>();
  marks$: Observable<any[]> = new Observable<any[]>();

  constructor(private categoryAndMarkService: CategoryandmarkService) {}

  ngOnInit(): void {
    this.categories$ = this.categoryAndMarkService.getCategory();
    this.marks$ = this.categoryAndMarkService.getMark();
  }
}
