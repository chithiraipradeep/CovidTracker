import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnChanges,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit, AfterViewInit,OnChanges {
  @Input() columData:any;
  @Input() rowData:any;
  @Output() stateClicked = new EventEmitter();
  selectedIndex: any = 0;
  dataSource:any=[];
  @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
   
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.rowData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
}

  ngAfterViewInit() {
    this.rowData.paginator = this.paginator;
    this.rowData.sort = this.sort;
  }

  getSelected(i, data) {
    this.selectedIndex = i;
    this.stateClicked.emit({value:data});
  }
}
