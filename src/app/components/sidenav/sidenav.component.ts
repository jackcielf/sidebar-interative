import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  darkmode = false;
  lightDarkMode = 'Dark';
  openSideBar = false;

  constructor() {}

  ngOnInit(): void {}

  fnDarkMode(): void {
    this.darkmode = !this.darkmode;
    if (this.lightDarkMode === 'Dark') {
      this.lightDarkMode = 'Light';
    } else {
      this.lightDarkMode = 'Dark';
    }
  }

  fnCloseOpenSideBar(): void {
    this.openSideBar = !this.openSideBar;
  }
}
