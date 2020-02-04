import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'forms-store-app';

  todoList = [{
    name: 'Jakub',
    lastname: 'Nowak',
    address: 'Mieszka',
    sex: 'M',
    age: '24'
  }];

  addToTodolist(e) {
    this.todoList.push(e);
  }
}

