import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants';
import { MenuItem } from '../../models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  public isCollapsed: boolean;
  public menuItems: Array<MenuItem>;

  constructor(private constants: Constants, private router: Router) { }

  ngOnInit() {
    this.menuItems = this.constants.menuItems;
  }

  public scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    // caso esteja na mesma pagina
    if (!element) {
      this.router.navigate(['home/:elementId']); // usar resolver para fazer a linha abaixo
    } else {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }
}
