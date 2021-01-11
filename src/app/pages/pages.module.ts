import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesRoutingModule } from './pages-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    PagesComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    PagesRoutingModule,
    FontAwesomeModule
  ],
  providers: [
  ]
})
export class PagesModule { }
