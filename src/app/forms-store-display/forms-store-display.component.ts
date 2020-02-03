import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreFormsApp } from '../store/models/store.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-forms-store-display',
  templateUrl: './forms-store-display.component.html',
  styleUrls: ['./forms-store-display.component.css']
})
export class FormsStoreDisplayComponent implements OnInit {
  stores: Observable<StoreFormsApp>

  constructor(private store: Store<AppState>) {
    this.stores = store.select('store');
  }

  ngOnInit() {
  }

}
