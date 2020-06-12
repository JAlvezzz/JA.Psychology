import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
    declarations: [
      BlogComponent,
    ],
    imports: [
      CommonModule,
      BlogRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class BlogModule { }
