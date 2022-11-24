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
  // {elemento: '', sensor: 'Hydrogen', ult_Med:  new Date().toLocaleString(), medicion: '',estado: true},
  
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
 

export class TableComponent implements OnInit {
  displayedColumns = [
    'elemento', 
    'sensor', 
    'ult_Med', 
    'medicion', 
    'estado'
  ];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<PeriodicElement>();

  resultsLength = ELEMENT_DATA.length;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = ELEMENT_DATA;
  setTimeout(() => {
    this.addRow()
  }, 7500);
  }
  addRow(){
    let aux = document.getElementById('auxTable') as HTMLElement;
    let estandarizador = document.getElementById('tempEstweather') as HTMLElement;
    let estTemp = estandarizador.innerHTML;
    let estBool =false;
    if(parseInt(estTemp)  >= 30 && parseInt(estTemp) <= 53 )
    estBool = true;
    let estandData: PeriodicElement = {
      elemento: 'Estandarizador', sensor: 'Temperatura', ult_Med:  new Date().toLocaleString(), medicion: estTemp,estado: estBool};
    ELEMENT_DATA.push(estandData);
    this.dataSource.data = ELEMENT_DATA;
    
    let past = document.getElementById('tempPastweather') as HTMLElement;
    let pastTemp = past.innerHTML;
    let patBool =false;
    if(parseInt(pastTemp)  >= 30 && parseInt(pastTemp) <= 53 )
    patBool = true;
    let pastData: PeriodicElement = {
      elemento: 'Pasteurizador', sensor: 'Temperatura', ult_Med:  new Date().toLocaleString(), medicion: pastTemp,estado: patBool};
    ELEMENT_DATA.push(pastData);
    this.dataSource.data = ELEMENT_DATA;

    let pastSpeed = document.getElementById('pressPasttext') as HTMLElement;
    let pSpeed = pastSpeed.innerHTML;
    let pSBool =false;
    if(parseInt(pSpeed)  <= 50 )
    pSBool = true;
    let pastSData: PeriodicElement = {
      elemento: 'Pasteurizador', sensor: 'Presión', ult_Med:  new Date().toLocaleString(), medicion: pSpeed,estado: pSBool};
    ELEMENT_DATA.push(pastSData);
    this.dataSource.data = ELEMENT_DATA;

    let silo = document.getElementById('pressSilotext') as HTMLElement;
    let siloSpeed = silo.innerHTML;
    let siloBool =false;
    if(parseInt(siloSpeed)  <= 50 )
    pSBool = true;
    let siloData: PeriodicElement = {
      elemento: 'Silos de leche', sensor: 'Temperatura', ult_Med:  new Date().toLocaleString(), medicion: siloSpeed,estado: pSBool};
    ELEMENT_DATA.push(siloData);
    this.dataSource.data = ELEMENT_DATA;

    aux.click()
  }
  auxRecord(){
    setTimeout(() => {
      this. addRow();
    }, 7500);
  }

  
}
export interface Element {
  elemento: string;
  sensor: string;
  ult_Mod: string;
  medicion: string;
  estado: string;
}
