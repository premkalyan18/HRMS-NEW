import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-knowledgebase-main',
  templateUrl: './knowledgebase-main.component.html',
  styleUrls: ['./knowledgebase-main.component.scss']
})
export class KnowledgebaseMainComponent implements OnInit {
  public allKnowledgeBase: any[] | any;
  constructor(public router: Router, private dataservice: DataService) {
    this.allKnowledgeBase = this.dataservice.allKnowledgeBase
  }

  ngOnInit(): void {
  }

}
