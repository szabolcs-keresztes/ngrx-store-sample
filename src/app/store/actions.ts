
import { Action } from '@ngrx/store';
import { FaultType } from '../data-models/fault-type';

export enum ActionTypes {
  PickFaultType = 'PickFaultType',
}

export class PickFaultType implements Action {
  readonly type: string = ActionTypes.PickFaultType;
  constructor(public faultType: FaultType) {}
}
