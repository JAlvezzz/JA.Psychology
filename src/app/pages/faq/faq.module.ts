import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';

@NgModule({
    declarations: [
      // FaqComponent,
    ],
    imports: [
      CommonModule,
      FaqRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class FaqModule { }
