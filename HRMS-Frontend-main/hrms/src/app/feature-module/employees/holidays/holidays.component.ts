import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService, DataService } from 'src/app/core/core.index';
import { Sort } from '@angular/material/sort';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WebStorage } from 'src/app/core/services/storage/web.storage';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  title = 'pagination';
  admin:any;
  public lstHolidays: any = [];
  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;
  public addHolidayForm: FormGroup | any;
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
  public subscription: Subscription;
  public customController:any
  //** / pagination variables

  constructor(private data: DataService,private formBuilder: FormBuilder,private storage: WebStorage, private authService:AuthService, private snackBar: MatSnackBar) {
        this.subscription = this.storage.addHolidayValue.subscribe((data:any)=>{
          // this.customController = data.message;
          // if(data.message=='Holiday added successfully'){
            if(typeof(data)!=="number"){
              this.getTableData();
            }
           
          // }
          
          
        })
  }

  ngOnInit(): void {
    this.admin = localStorage.getItem('isAdmin')
    this.getTableData();
    this.addHolidayForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      date: ['', [Validators.required]]
    })
  }

  private getTableData(): void {
    this.lstHolidays = [];
    this.serialNumberArray = [];

    this.authService.getAllHolidays().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.holidays.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          const dateString = res.date;
          const dateObject = new Date(dateString);
          const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          res.day = daysOfWeek[dateObject.getDay()];
          this.lstHolidays.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.lstHolidays);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });

 
  }


  public sortData(sort: Sort) {
    const data = this.lstHolidays.slice();

    if (!sort.active || sort.direction === '') {
      this.lstHolidays = data;
    } else {
      this.lstHolidays = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstHolidays = this.dataSource.filteredData;
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
  addHoliday(){
    let joinDate:any = this.addHolidayForm.value['date']
    const dateObject = new Date(joinDate);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    this.addHolidayForm.value['date'] = formattedDate
    this.storage.addedHoliday(this.addHolidayForm.value);
  }
  
}
export interface pageSelection {
  skip: number;
  limit: number;
}