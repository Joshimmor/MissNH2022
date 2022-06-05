import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[
    trigger('social', [
      transition('void => *', [
          style({opacity:0,transform:'translateX(-200px)'}),
          animate('350ms 100ms ease-in-out')
      ]),
      transition('* => void', [
          animate('350ms ease-in-out',
              style({opacity:1,transform:'translateX(-200px)'}))
      ]),
  ])
  ]
})
export class MenuComponent implements OnInit {
  constructor() { }
  socialView:boolean = false
  @Output() view = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
  closeDrawer() {
    this.view.emit(false);
  }
  showSocial(){
    this.socialView = !this.socialView
  }
}
