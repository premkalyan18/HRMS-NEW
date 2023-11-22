import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {
  public projects: any[] | any;
  public rows = [];
  public srch = [];
  constructor(public router: Router, private dataservice: DataService) {
    this.projects = this.dataservice.projects;
  }
  ngOnInit(): void {
  }


  getProjects() {
    this.dataservice.get("projects").subscribe((data: any) => {
      this.projects = data;
      this.rows = this.projects;
      this.srch = [...this.rows];
    });
  }

}
