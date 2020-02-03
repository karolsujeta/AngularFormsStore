import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
    });
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
