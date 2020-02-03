import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-display',
  templateUrl: './forms-display.component.html',
  styleUrls: ['./forms-display.component.css']
})
export class FormsDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  todos;
}
