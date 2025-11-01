import { AlarmSeverity } from './value-objects/alarmSeverity';

export class Alarm {
  constructor(
    public id: string,
    public name: string,
    public severity: AlarmSeverity,
  ) {}
}
