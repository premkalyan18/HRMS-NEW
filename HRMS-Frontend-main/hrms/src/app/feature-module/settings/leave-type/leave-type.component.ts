import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';
import { Sort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.scss']
})
export class LeaveTypeComponent implements OnInit {

  public addLeaveType: FormGroup | any;
  public editLeaveType: FormGroup | any;

  public allLeaveType: any = [];
  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;

  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public totalData: any = 0;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  //** / pagination variables

  constructor(public router: Router, private data: DataService,private formBuilder: FormBuilder,) {
   this.allLeaveType = this.data.allLeaveType
  }
  ngOnInit(): void {
    this.getTableData();
        // Add Provident Form Validation And Getting Values

        this.addLeaveType = this.formBuilder.group({
          addLeaveType: ["", [Validators.required]],
          addLeaveDays: ["", [Validators.required]],
        });

        // Edit Provident Form Validation And Getting Values

        this.editLeaveType = this.formBuilder.group({
          editLeave: ["", [Validators.required]],
          editLeaveDays: ["", [Validators.required]],
        });
  }
  private getTableData(): void {
    this.allLeaveType = [];
    this.serialNumberArray = [];

    this.data.allLeaveType.map((res: any, index: number) => {
      let serialNumber = index + 1;
      if (index >= this.skip && serialNumber <= this.limit) {
        res.id = serialNumber;
        this.allLeaveType.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.totalData = this.data.allLeaveType.length;
    this.calculateTotalPages(this.totalData, this.pageSize);
  }
  public sortData(sort: Sort) {
    const data = this.allLeaveType.slice();

    if (!sort.active || sort.direction === '') {
      this.allLeaveType = data;
    } else {
      this.allLeaveType = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.allLeaveType = this.dataSource.filteredData;
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData();
  }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (var i = 1; i <= this.totalPages; i++) {
      let limit = pageSize * i;
      let skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }

  

}
export interface pageSelection {
  skip: number;
  limit: number;
}
