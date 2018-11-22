import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { FaultType } from './data-models/fault-type';
import { PickFaultType } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private store: Store<{ pickedFaultType: FaultType }>) {}

  pickFaultType(faultType: FaultType) {
    console.log('selected fault type', faultType);
    this.store.dispatch(new PickFaultType(faultType));
  }

}
