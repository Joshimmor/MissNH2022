import { AfterViewInit, Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  view:boolean=false
  opened:boolean  = false
  scroll$:any | undefined
  title = 'MissNH2022';
  constructor() {}
  viewChange(evn:boolean){
    this.view = evn
    console.log(evn)
  }
 }
