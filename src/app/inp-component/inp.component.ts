import {
  Component,
  Input,
  EventEmitter,
  Output
} from '@angular/core';


@Component({
  selector: 'app-inp-comp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.css'],
  })
export class InpComponent {
  @Input() listingArea: string; // receive listingArea from Outside
  @Output() onlistingAreaChanged = new EventEmitter();
  @Output() ColorBtnClicked = new EventEmitter<any>();

  listingAreaChanged = (model: string, blur: string) => {
    this.onlistingAreaChanged.emit(model + blur);
  }

  blur = (listingArea)  => {
    this.listingAreaChanged(listingArea, '@blur@');
  }

}
