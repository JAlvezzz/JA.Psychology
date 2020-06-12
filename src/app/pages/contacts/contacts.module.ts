import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
    declarations: [
      // ContactsComponent,
    ],
    imports: [
      CommonModule,
      ContactsRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class ContactsModule { }
