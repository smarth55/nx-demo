import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-demo-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
