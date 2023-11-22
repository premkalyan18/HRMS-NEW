import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService, DataService } from 'src/app/core/core.index';
import { Subscription } from 'rxjs';
import { WebStorage } from 'src/app/core/services/storage/web.storage';

@Component({
  selector: 'app-leave-employee',
  templateUrl: './leave-employee.component.html',
  styleUrls: ['./leave-employee.component.scss']
})
export class LeaveEmployeeComponent implements OnInit {
  public lstLeave: any = [];
  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;
  public casual:any;
  public medical:any;
  public lop:any
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
  public addLeaveForm: FormGroup | any;
  public subscription: Subscription;
  public customController:any;
  //** / pagination variables

  constructor(private data: DataService, private authService:AuthService,private formBuilder: FormBuilder,private storage:WebStorage) {
    this.subscription = this.storage.addLeaveValue.subscribe((data:any)=>{
      if(data){
        this.getTableData();
        this.customController = data
      }
        
    })
    this.subscription = this.storage.leaveProcessValue.subscribe((data)=>{
      if(typeof(data)!=="number"){
        this.getTableData();
      }
    })
  }

  ngOnInit(): void {
    this.getTableData();
    this.getLeavesDetails();
    this.addLeaveForm = this.formBuilder.group({
      leave_type: ['',[Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      leave_reason: ['', [Validators.required]],
      
    })
  }

  private getTableData(): void {
    this.lstLeave = [];
    this.serialNumberArray = [];

    this.authService.getLeaveHistory().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.lstLeave.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.lstLeave);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });

   
  }

  public sortData(sort: Sort) {
    const data = this.lstLeave.slice();

    if (!sort.active || sort.direction === '') {
      this.lstLeave = data;
    } else {
      this.lstLeave = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstLeave = this.dataSource.filteredData;
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
  updateStatus(row:any,status:any){

  }
  getDates(date:any){
    let joinDate:any = date
    const dateObject = new Date(joinDate);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
  }
  addLeaveFun(){
    this.addLeaveForm.value['start_date']=  this.getDates(this.addLeaveForm.value['start_date'])
    this.addLeaveForm.value['end_date']=  this.getDates(this.addLeaveForm.value['end_date'])
    this.storage.addLeaveStorage(this.addLeaveForm.value)
  }
  getLeavesDetails(){
    this.authService.getCurrentLeaves().subscribe((data:any)=>{
      this.casual = data.casual_remaining;
      this.medical = data['medical leaves remaining']
      this.lop = data['remaining LOP']
    })
  }
}
export interface pageSelection {
  skip: number;
  limit: number;
}