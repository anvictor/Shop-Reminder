import {
  Component,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {Old} from '../old';

@Component({
  selector: 'app-old-comp',
  templateUrl: './old.component.html',
  styleUrls: ['./old.component.css']
  })
export class OldComponent {
  @Input() oldData: Old[];
  @Output() OldClicked: EventEmitter<any> = new EventEmitter();
  oldUse(elem, act) {
    this.OldClicked.emit(elem + '@' + act);
  }
  oldClose(elem, act) {
    this.OldClicked.emit(elem + '@' + act);
  }


}
