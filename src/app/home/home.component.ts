import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  lastDisplay = '';
  display(id:string){
    let display = document.getElementById(id)  as HTMLElement;
    let last = document.getElementById(this.lastDisplay) as HTMLElement;
    if(id != this.lastDisplay){ 
      if(this.lastDisplay != ''){
        
        display.style.display = 'flex';
        setTimeout(() => {
          if (id == 'display4')
            display.style.width = '298px';
          else
            display.style.width = '282px';
        }, 200);
        last.style.width = '';
        setTimeout(() => {
          last.style.display = 'none';
        }, 200);
        this.lastDisplay = id;

      }else{
        display.style.display = 'flex';
        setTimeout(() => {
          if (id == 'display4')
            display.style.width = '298px';
          else
            display.style.width = '282px';
        }, 200);
        this.lastDisplay = id;
      }
   }else{
    display.style.width= '';
    setTimeout(() => {
      display.style.display = 'none';
    }, 200);
    this.lastDisplay = '';
   }
    
  }
  lastVertical ='';
  vertlDisp(id:string){
    let display = document.getElementById(id) as HTMLElement;
    let last = document.getElementById(this.lastVertical) as HTMLElement;
    if(id != this.lastVertical){ 
      if(this.lastVertical != ''){
        last.style.height = '';
        last.style.transform= 'scaleX(0)';
        setTimeout(() => {
          last.style.display = 'none';
        }, 200);
        display.style.display = 'flex'
        display.style.transform= 'scaleX(0)';
        setTimeout(() => {
          display.style.height = '146px';
          display.style.transform= 'scaleX(1)';
        }, 200);
        this.lastVertical = id;
      }
      else{
        display.style.display = 'flex'
        display.style.transform= 'scaleX(0)';
        setTimeout(() => {
          display.style.height = '146px';
          display.style.transform= 'scaleX(1)';
        }, 200);
        this.lastVertical = id;
      }
    }else{
      display.style.height = '';
      display.style.transform= 'scaleX(0)';
      setTimeout(() => {
        display.style.display = 'none'
      }, 200);
      this.lastVertical = '';
    }
  }

}
