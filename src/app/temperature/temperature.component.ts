import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  danger:boolean = false;
  tempChange(){
    let colorGrow = document.getElementById('colorGrow') as HTMLElement;
    let weather = document.getElementById('weather') as HTMLElement;
    let bubble = document.getElementById('bubble') as HTMLElement;
    let x:number = Math.random() * 100;
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    x = parseInt(formatter.format(x)); // "3.01"
    if(x >= 50){
      colorGrow.style.backgroundColor = 'red';
      bubble.style.backgroundColor = 'red';
    }else{
      colorGrow.style.backgroundColor ='rgb(45 117 182)';
      bubble.style.backgroundColor ='rgb(45 117 182)';
    }
    colorGrow.style.height = x+'%';
    weather.innerHTML = x + '&#8451;';
    if(x >= 30 && x <= 53 )
    this.danger = false;
    else
    this.danger = true;
    // alert(x)
  }
}
