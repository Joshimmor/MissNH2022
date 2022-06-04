import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bio', [
      transition('void => *', [
          style({opacity:0}),
          animate('500ms 300ms ease-in-out')
      ]),
      transition('* => void', [
          animate('500ms ease-in-out',
              style({opacity:1}))
      ]),
  ]),
    trigger('lAnimation', [
        transition('void => *', [
            style({opacity:0}),
            animate('500ms 300ms ease-in-out')
        ]),
        transition('* => void', [
            animate('500ms ease-in-out',
                style({opacity:1}))
        ]),
    ]),
    trigger('rAnimation', [
      transition('void => *', [
          style({opacity:0}),
          animate('800ms 300ms ease-in-out')
      ]),
      transition('* => void', [
          animate('800ms ease-in-out',
              style({opacity:1}))
      ]),
  ]),
  trigger('banner', [
    transition('void => *', [
        style({opacity:0,transform:'translateX(100px)'}),
        animate('300ms ease-in-out')
    ]),
    transition('* => void', [
        animate('300ms ease-in-out',
            style({opacity:1}))
    ]),
]),
trigger('profile', [
  transition('void => *', [
      style({opacity:0}),
      animate('500ms 300ms ease-in-out')
  ]),
  transition('* => void', [
      animate('500ms ease-in-out',
          style({opacity:1}))
  ]),
])
],

})
export class HomeComponent implements OnInit {
  showFiller = false;
  constructor() {}
  ngOnInit(): void {}
}
