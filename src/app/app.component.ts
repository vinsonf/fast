import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { selectUsers } from './selectors/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fast';

}
