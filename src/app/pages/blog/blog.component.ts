import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  calendarIcon = faCalendarAlt;
  userIcon = faUser;

  public blogsCollection: AngularFirestoreCollection<Blog>;
  public items: Blog[];

  constructor(private df: AngularFirestore) { }

  ngOnInit(): void {
    // debugger;
    // this.blogsCollection = this.df.collection<any>('blogs');
    // this.blogsCollection.valueChanges().subscribe(res => {
    //   debugger;
    //   this.items = res;
    // });
  }

}
