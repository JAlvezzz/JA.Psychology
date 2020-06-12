import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
    declarations: [
      // AboutUsComponent,
    ],
    imports: [
      CommonModule,
      AboutUsRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class AboutUsModule { }
