import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      TranslateModule.forChild(),
      NgbModule,
      FontAwesomeModule
    ],
    declarations: [
      NavbarMenuComponent,
      FooterComponent,
    ],
    exports: [
      CommonModule,
      NavbarMenuComponent,
      FooterComponent,
      TranslateModule,
      RouterModule,
      FormsModule,
      NgbModule,
      FontAwesomeModule
    ],
    entryComponents: [
    ],
    providers: [
    ]
  })
  export class SharedModule { }
