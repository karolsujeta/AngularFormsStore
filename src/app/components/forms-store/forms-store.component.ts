import { Component, OnInit } from '@angular/core';
import * as StoreActions from '../../store/actions/store.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators';


@Component({
  selector: 'app-forms-store',
  templateUrl: './forms-store.component.html',
  styleUrls: ['./forms-store.component.css']
})
export class FormsStoreComponent implements OnInit {

  constructor(private store: Store<AppState>, private formbuilder: FormBuilder) { }

  modelFormStore: FormGroup = null;
  ngOnInit() {
    this.modelFormStore = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      sex: ['', Validators.required],
      age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('[0-9]{1}|[0-9]{2}|[0-9]{3}')]],
    });

    this.modelFormStore.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.onControlValueChanged();
    });

    this.onControlValueChanged(); // ustawiamy początkowany stan walidacji
  }

  addUser(name, lastname, address, sex, age) {
    this.store.dispatch(new StoreActions.AddUser({ name: name, lastname: lastname, address: address, sex: sex, age: age }))
  }

  formErrors = {
    name: '',
    lastname: '',
    address: '',
    sex: '',
    age: '',
  }

  private validationMessage = {
    name: {
      required: "Wprowadź imię!",
      minlength: "Co najmniej 2 litery!",
      maxlength: "Maksymalnie 15 znaków!",
    },
    lastname: {
      required: "Wprowadź nazwisko!",
      minlength: "Co najmniej 2 litery!",
      maxlength: "Maksymalnie 15 znaków!",
    },
    address: {
      required: "Wprowadź adres!",
      minlength: "Co najmniej 2 znaki!",
      maxlength: "Maksymalnie 25 znaków!",
    },
    sex: {
      required: "Wprowadź płeć: Mężczyzna/Kobieta",
    },
    age: {
      required: "Wprowadź wiek!",
      minlength: "Wprowadź najmniej 1 cyfrę!",
      maxlength: "Maksymalnie 3 znaki!",
      pattern: "Zły format!"
    },
  }

  onControlValueChanged() {
    const form = this.modelFormStore;

    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const validationMessage = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += validationMessage[key] + ' ';
        }
      }
    }
  }
}
