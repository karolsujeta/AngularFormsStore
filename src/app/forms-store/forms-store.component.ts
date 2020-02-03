import { Component, OnInit } from '@angular/core';
import * as StoreActions from '../store/actions/store.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';


@Component({
  selector: 'app-forms-store',
  templateUrl: './forms-store.component.html',
  styleUrls: ['./forms-store.component.css']
})
export class FormsStoreComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addUser(name, lastname, address, sex, age) {
    this.store.dispatch(new StoreActions.AddUser({ name: name, lastname: lastname, address: address, sex: sex, age: age }))
  }
}
