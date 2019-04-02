import {Component} from '@angular/core';

@Component({
  selector: 'app-help-comp',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
  })
export class HelpComponent {
  activeLeng = 'en';
  onClickLengBtn(leng) {
    this.activeLeng = leng;
  }
}
