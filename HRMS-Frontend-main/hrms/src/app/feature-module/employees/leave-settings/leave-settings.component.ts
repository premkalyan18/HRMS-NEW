import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-leave-settings',
  templateUrl: './leave-settings.component.html',
  styleUrls: ['./leave-settings.component.scss']
})
export class LeaveSettingsComponent implements OnInit {
  public allCustomPolicy: any[] | any;
  public buttonDisabled : boolean = false;
  public cancelDisabled : boolean = false;
  public buttondisabled : boolean = false;
  public canceldisabled : boolean = false;

   //Edit variable, its true than read more string will print
   public Edit:boolean = true;
   public Edits:boolean = true;
   public edits:boolean = true;
   public read:boolean = true;

   //hiding info box
   public visible:boolean = false;
   public visibles:boolean = false;
   public Visible:boolean = false;
   public readless: boolean = false

  constructor(public router: Router, private dataservice: DataService) {
    this.allCustomPolicy = this.dataservice.allCustomPolicy
  }
  ngOnInit(): void {

  }
  //onclick toggling both
  onclick()
  {
    this.Edit = !this.Edit; //not equal to condition
    this.visible = !this.visible
  }
  //onclick toggling both
  onclicks()
  {
    this.Edits = !this.Edits; //not equal to condition
    this.visibles = !this.visibles
  }
  onClick()
  {
    this.edits = !this.edits; //not equal to condition
    this.Visible = !this.Visible
  }
  onClicks()
  {
    this.read = !this.read; //not equal to condition
    this.readless = !this.readless
  }

}
