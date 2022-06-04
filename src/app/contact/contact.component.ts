import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('first', [
      transition('void => *', [
          style({opacity:0,transform:'translateX(200px)'}),
          animate('200ms  ease-in-out')
      ]),
      transition('* => void', [
          animate('500ms ease-in-out',
              style({opacity:1}))
      ]),
  ]),
  trigger('second', [
    transition('void => *', [
        style({opacity:0,transform:'translateX(200px)'}),
        animate('200ms 100ms ease-in-out')
    ]),
    transition('* => void', [
        animate('500ms ease-in-out',
            style({opacity:1}))
    ]),
]),
trigger('third', [
  transition('void => *', [
      style({opacity:0,transform:'translateX(200px)'}),
      animate('200ms 200ms ease-in-out')
  ]),
  transition('* => void', [
      animate('500ms ease-in-out',
          style({opacity:1}))
  ]),
]),
trigger('button', [
  transition('void => *', [
      style({opacity:0,transform:'translateX(200px)'}),
      animate('200ms 300ms ease-in-out')
  ]),
  transition('* => void', [
      animate('500ms ease-in-out',
          style({opacity:1}))
  ]),
])
]
})
export class ContactComponent implements OnInit {
  itemsCollection: AngularFirestoreCollection<contactForm>;
  name:string | undefined;
  email:string | undefined;
  phone:number | undefined;
  constructor(private firestore: AngularFirestore, private router:Router) {
    this.itemsCollection = firestore.collection<contactForm>('contact')
  }
  ngOnInit(): void {}
  submitForm(){
    this.itemsCollection.add({
      name:this.name?this.name:"",
      email:this.email?this.email:"",
      phone:this.phone?this.phone:0
    })
    .then(()=> this.router.navigateByUrl("/"))
    .catch(()=> this.router.navigateByUrl("/"))
  }
}
interface contactForm {
  name:string;
  email:string;
  phone:number;
}