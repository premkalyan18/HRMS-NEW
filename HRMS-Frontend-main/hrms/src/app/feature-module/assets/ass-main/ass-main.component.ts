import { Component, OnInit } from '@angular/core';
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
  selector: 'app-ass-main',
  templateUrl: './ass-main.component.html',
  styleUrls: ['./ass-main.component.scss']
})
export class AssMainComponent implements OnInit {


  statusValue: any
  public addAssets: FormGroup | any;
  public editAssets: FormGroup | any;
  public allAssets: any = [];
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


  constructor(private formBuilder: FormBuilder,  private data: DataService) {

  }

  ngOnInit() {
    this.getTableData();  

    // Add Assets Form Validation And Getting Values

    this.addAssets = this.formBuilder.group({
      assetName: ["", [Validators.required]],
      assetId: ["", [Validators.required]],
      purchaseDate: ["", [Validators.required]],
      purchaseTo: ["", [Validators.required]],
      warranty: ["", [Validators.required]],
      value: ["", [Validators.required]],
      assetUser: ["", [Validators.required]],
      assetStatus: ["", [Validators.required]],
    });

    // Edit Assets Form Validation And Getting Values

    this.editAssets = this.formBuilder.group({
      editAssetsName: ["", [Validators.required]],
      editPurchaseDate: ["", [Validators.required]],
      editPurchaseTo: ["", [Validators.required]],
      editWarranty: ["", [Validators.required]],
      editvalue: ["", [Validators.required]],
      editAssetUser: ["", [Validators.required]],
      editAssetId: ["", [Validators.required]],
      editAssetStatus: ["", [Validators.required]],
    });
  }


  //getting the status value
  getStatus(data: any) {
    this.statusValue = data;
  }

  private getTableData(): void {
    this.allAssets = [];
    this.serialNumberArray = [];

    this.data.getAssets().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.allAssets.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.allAssets);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });

 
  }


  public sortData(sort: Sort) {
    const data = this.allAssets.slice();

    if (!sort.active || sort.direction === '') {
      this.allAssets = data;
    } else {
      this.allAssets = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.allAssets = this.dataSource.filteredData;
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