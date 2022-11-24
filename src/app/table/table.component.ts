import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'


export class PeriodicElement {
  elemento: string;
  sensor: string;
  ult_Med: string;
  medicion: string;
  estado: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {elemento: '', sensor: 'Hydrogen', ult_Med:  new Date().toLocaleString(), medicion: '',estado: true},
  
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
 

export class TableComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA); displayedColumns: string[] = [
    'elemento', 
    'sensor', 
    'ult_Med', 
    'medicion', 
    'estado'
  ];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  resultsLength = ELEMENT_DATA.length;
  constructor() { }

  ngOnInit(): void {
  }
  
}
export interface Element {
  elemento: string;
  sensor: string;
  ult_Mod: string;
  medicion: string;
  estado: string;
}
