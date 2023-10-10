import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  showConductorButton = false;
  showVehicleButton = false;
  showCatAndMarkButton = false;

  showMenu: string | null = null;

  toggleMenu(menu: string | null): void {
    if (this.showMenu === menu) {
      this.showMenu = null;
    } else {
      this.showMenu = menu;
    }
  }
}
