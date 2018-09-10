import { Component } from '@angular/core';

import { getViewData } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* titleMain = 'Professional Learning Information System (PLIS)'; */
  titleNav = 'PLIS';
  copyrightYear = new Date().getFullYear();

  

  constructor() {
    /* this.appendItems(0, this.sum); */
  }

  

}
