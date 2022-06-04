import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor() { }
  @Output() view = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
  closeDrawer() {
    this.view.emit(false);
  }
}
