import { Component, OnInit,HostListener, NgZone } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})


export class LeadsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  
  }
}

