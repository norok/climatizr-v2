import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl2-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  private title = "Climatizr";

  ngOnInit() {
  }

}
