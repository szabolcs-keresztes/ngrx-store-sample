import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { FaultType } from '../../data-models/fault-type';
import { PickFaultType } from '../../store/actions';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent {

  pickedFaultType: FaultType;

  constructor(private store: Store<any>) {
    store.select(state => state.faults).subscribe(data => this.pickedFaultType = data.pickedFaultType);
  }

  pickDrivingFaultType() {
    this.pickFaultType(FaultType.driving);
  }

  pickSeriousFaultType() {
    this.pickFaultType(FaultType.serious);
  }

  pickDangerousFaultType() {
    this.pickFaultType(FaultType.dangerous);
  }

  pickFaultType(faultType: FaultType) {
    this.store.dispatch(new PickFaultType(faultType));
  }

}
