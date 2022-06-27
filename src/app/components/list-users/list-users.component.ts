import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionSelectUserId } from 'src/app/actions/users.actions';
import { State } from 'src/app/reducers';
import { selectUsers } from 'src/app/selectors/users.selectors';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users$ = this.store.select(selectUsers);
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
  }
  selectUserId(id: number){
    this.store.dispatch(actionSelectUserId({id}))
  }

}
