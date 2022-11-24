import { devOnlyGuardedExpression } from '@angular/compiler';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {
 @Input() idP:string;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.deg(this.idP);
      
    }, 200);
  }
clsPrev = '';
delCls(id:string){
  let speed = document.getElementById(id) as HTMLElement;
  if (this.clsPrev != ''){
    speed.classList.remove(this.clsPrev);
    this.clsPrev = '';
  }
 else return;
}
// auto change degrees
deg(id:string):any{
  let aux = document.getElementById(id+'aux') as HTMLElement;
  let speed = document.getElementById(id) as HTMLElement;
  let text = document.getElementById(id+'text') as HTMLElement;
  let deg = Math.random() * 100;
  this.delCls(id)

  if(deg >=0 && deg <= 5 ){
    speed.classList.add('d_0')
    this.clsPrev = 'd_0'
  }
  else if(deg >5 && deg <= 10){
    speed.classList.add('d_10')
    this.clsPrev = 'd_10'
  }
  else if(deg >10 && deg <=20){
    speed.classList.add('d_20')
    this.clsPrev = 'd_20'
  }
  else if(deg >20 && deg <=30){
    speed.classList.add('d_30')
    this.clsPrev = 'd_30'
  }
  else if(deg >30 && deg <=40){
    speed.classList.add('d_20')
    this.clsPrev = 'd_40'
  }
  else if(deg >40 && deg <=50){
    speed.classList.add('d_50')
    this.clsPrev = 'd_50'
  }
  else if(deg >50 && deg <=60){
    speed.classList.add('d_60')
    this.clsPrev = 'd_60'
  }
  else if(deg >60 && deg <=70){
    speed.classList.add('d_70')
    this.clsPrev = 'd_70'
  }
  else if(deg >70 && deg <=80){
    speed.classList.add('d_80')
    this.clsPrev = 'd_80'
  }
  else if(deg >80 && deg <=90){
    speed.classList.add('d_90')
    this.clsPrev = 'd_90'
  }
  else if(deg >90 && deg <=100){
    speed.classList.add('d_100')
    this.clsPrev = 'd_100'
  }
  // else if(deg >100 && deg <=110){
  //   speed.classList.add('d_110')
  //   this.clsPrev = 'd_110'
  // }
  text.innerHTML= deg.toString().split('.')[0]
  
aux.click();
}
auxDeg(id:string){
  setTimeout(() => {
    this.deg(id)
  }, 7000);
}
}

