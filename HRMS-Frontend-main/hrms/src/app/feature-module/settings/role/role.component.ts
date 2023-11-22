import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  public allroles: any[] | any;
  constructor(public router: Router, private dataservice: DataService) {
  this.allroles = this.dataservice.allroles
  }
  ngOnInit(): void {
  }

}
