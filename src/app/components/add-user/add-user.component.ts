import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actionAddUser } from 'src/app/actions/users.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form;
  constructor(
    private store: Store<State>,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        id: ['', Validators.required],
        name: [''],
        email: ['']
      });
    }

  ngOnInit(): void {
  }

  addUser() {
    let { id, name, email } = this.form.value;

   if (id && name && email) {
        this.store.dispatch(actionAddUser({user: {id:Number(id), name, email}}));
      }
    }


}
