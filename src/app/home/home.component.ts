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
    if(id != ''){
      if(id == this.lastDisplay) {
        let display = document.getElementById(this.lastDisplay) as HTMLElement;
        display.style.width = '';
        this.lastDisplay = '';
        setTimeout(() => {
          display.style.display = 'none';
        }, 150);
      }else{
        let display = document.getElementById(id) as HTMLElement;
        display.style.display = 'flex';
        setTimeout(() => {
          if(id == 'display4')
          display.style.width = '298px';
          else
          display.style.width = '282px';
        }, 150);
        this.lastDisplay = id;
      }
    }else{
      let display = document.getElementById(this.lastDisplay) as HTMLElement;
      display.style.width = '';
      this.lastDisplay = '';
      setTimeout(() => {
        display.style.display = 'none';
      }, 150);
    }
  }
}
