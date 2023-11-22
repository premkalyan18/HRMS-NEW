import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/core.index';

import { map, mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(
   ) { }

  ngOnInit(): void {


  }

}
