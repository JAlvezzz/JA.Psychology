import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PricesComponent } from './prices.component';
import { PricesRoutingModule } from './prices-routing.module';

@NgModule({
    declarations: [
      // PricesComponent,
    ],
    imports: [
      CommonModule,
      PricesRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class PricesModule { }
