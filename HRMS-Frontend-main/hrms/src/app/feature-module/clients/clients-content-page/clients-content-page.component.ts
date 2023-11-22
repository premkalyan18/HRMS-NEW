import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-clients-content-page',
  templateUrl: './clients-content-page.component.html',
  styleUrls: ['./clients-content-page.component.scss'],
})
export class ClientsContentPageComponent implements OnInit {
  public companiesList: any[] | any;
  public clientsData: any[] | any;
  constructor(public router: Router, private dataservice: DataService) {
    this.companiesList = this.dataservice.companiesList;
    this.clientsData = this.dataservice.clientsDatas;
  }
  ngOnInit(): void {}
}
