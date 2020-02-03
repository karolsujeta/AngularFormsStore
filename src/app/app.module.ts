import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsDisplayComponent } from './components/forms-display/forms-display.component';
import { FormsStoreComponent } from './components/forms-store/forms-store.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/store.reducer';
import { FormsStoreDisplayComponent } from './components/forms-store-display/forms-store-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormsDisplayComponent,
    FormsStoreComponent,
    FormsStoreDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ store: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
