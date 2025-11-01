import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AlarmSeverity } from '../value-objects/alarmSeverity';
import { Alarm } from '../alarm';

@Injectable()
export class AlarmFactory {
  create(name: string, severity: string) {
    const id = randomUUID();
    const alarmSeverity = new AlarmSeverity(severity as AlarmSeverity['value']);
    return new Alarm(id, name, alarmSeverity);
  }
}
