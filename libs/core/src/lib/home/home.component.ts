import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
