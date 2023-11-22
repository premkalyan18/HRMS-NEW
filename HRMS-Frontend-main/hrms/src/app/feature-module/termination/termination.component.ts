import { Component, OnInit,HostListener, NgZone  } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/core/core.index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-termination',
  templateUrl: './termination.component.html',
  styleUrls: ['./termination.component.scss']
})

export class TerminationComponent implements OnInit {
 

  constructor() {
    
  }

  ngOnInit() {
  
  }


 
}
