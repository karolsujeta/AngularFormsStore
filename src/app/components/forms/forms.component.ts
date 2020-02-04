import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  modelForm: FormGroup = null;

  newname: String = '';
  newlastname: String = '';
  newaddress: String = '';
  newsex: String = '';
  newage: String = '';

  @Output()
  event = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      sex: ['', Validators.required],
      age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
    });

    this.modelForm.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.onControlValueChanged();
    });

    this.onControlValueChanged(); // ustawiamy początkowany stan walidacji
  }

  formErrors = {
    name: '',
    lastname: '',
    address: '',
    sex: '',
    age: ''
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
    },
  }

  onControlValueChanged() {
    const form = this.modelForm;

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

  addTodo() {
    var newElement = {
      name: this.newname,
      lastname: this.newlastname,
      address: this.newaddress,
      sex: this.newsex,
      age: this.newage
    }
    this.event.emit(newElement);
  }

  onSubmit(form) {
    console.log(form.value);
  }

}
