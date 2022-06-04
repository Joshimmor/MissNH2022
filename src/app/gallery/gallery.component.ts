import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getStorage, ref, getDownloadURL,listAll } from "firebase/storage";
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('pic', [
      transition('void => *', [
          style({opacity:0}),
          animate('500ms 1500ms ease-in-out')
      ]),
      transition('* => void', [
          animate('500ms ease-in-out',
              style({opacity:1}))
      ]),
  ]),]
})
export class GalleryComponent implements OnInit {
  imgRef:string[] | undefined
  constructor(private store: AngularFireStorage,public dialog: MatDialog) {
    this.imgRef = []
   }
   
  ngOnInit() {
    let paths:string[] = []
    const storage = getStorage();
    const Ref = ref(storage, '');
    // getDownloadURL(Ref).then(n => console.log(n))
    listAll(Ref)
    .then(n => n.items.forEach(j => paths.push(j.fullPath)))
    .then(n => {
      for(let i = 0; i < paths.length; i++){
        let childRef = ref(storage,paths[i])
        getDownloadURL(childRef).then( k =>
          this.imgRef?.push(k))
      }
    })
    // for(let i = 0 ; i < 50;i++){
    //   this.imgRef?.push('./assets/Pictures/Camila.jpg')
    // }
  }
  onClick(imgSrc:string){
    let dialogRef = this.dialog.open(GalleryViewDialog, {
      data:{path:imgSrc}
    });
  }
}
@Component({
  selector: 'app-gallery-view',
  templateUrl: './PhotoView.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryViewDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {path: string}, public dialogRef: MatDialogRef<GalleryViewDialog>) { }
  
    closeDialog() {
      this.dialogRef.close();
    }
  }