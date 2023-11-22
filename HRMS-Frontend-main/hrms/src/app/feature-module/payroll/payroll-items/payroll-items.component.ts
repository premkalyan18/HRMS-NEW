import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/core/core.index';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-payroll-items',
  templateUrl: './payroll-items.component.html',
  styleUrls: ['./payroll-items.component.scss']
})
export class PayrollItemsComponent implements OnInit {
  public addPayrollForm: FormGroup | any;
  public addOverForm: FormGroup | any;
  public addDeductForm: FormGroup | any;
  public editPayrollForm: FormGroup | any;
  public editOverForm: FormGroup | any;
  public editDeductForm: FormGroup | any;
  public allAddPayroll: any = [];
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

  constructor(private data: DataService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.getTableData();

        // Add payroll Form Validation And Getting Values

        this.addPayrollForm = this.formBuilder.group({
          addPayrollName: ["", [Validators.required]],
          addPayrollCategory: ["", [Validators.required]],
          addPayrollUnit: ["", [Validators.required]],
        });

        // Edit payroll Form Validation And Getting Values

        this.editPayrollForm = this.formBuilder.group({
          editPayrollName: ["", [Validators.required]],
          editPayrollCategory: ["", [Validators.required]],
          editPayrollUnit: ["", [Validators.required]],
        });

        // Add overTime Form Validation And Getting Values

        this.addOverForm = this.formBuilder.group({
          addOverName: ["", [Validators.required]],
          addOverRate: ["", [Validators.required]],
        });

        // Edit overtime Form Validation And Getting Values

        this.editOverForm = this.formBuilder.group({
          editOverName: ["", [Validators.required]],
          editOverRate: ["", [Validators.required]],
        });

        // Add deduction Form Validation And Getting Values

        this.addDeductForm = this.formBuilder.group({
          addDeductName: ["", [Validators.required]],
          addDeductUnit: ["", [Validators.required]],
        });

        // Edit deduction Form Validation And Getting Values

        this.editDeductForm = this.formBuilder.group({
          editDeductName: ["", [Validators.required]],
          editDeductunit: ["", [Validators.required]],
        });
  }

  private getTableData(): void {
    this.allAddPayroll = [];
    this.serialNumberArray = [];

    this.data.getAddPayroll().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.allAddPayroll.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.allAddPayroll);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });

 
  }

  public sortData(sort: Sort) {
    const data = this.allAddPayroll.slice();

    if (!sort.active || sort.direction === '') {
      this.allAddPayroll = data;
    } else {
      this.allAddPayroll = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.allAddPayroll = this.dataSource.filteredData;
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
