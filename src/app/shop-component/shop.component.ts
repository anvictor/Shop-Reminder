import {
  Component,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-shop-comp',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
  })

export class ShopComponent {
  @Input() shopData: Item[];
  @Output() ColorBtnClicked = new EventEmitter<any>();

    d(elem: any, sort: number) {
      let newDone; // создаем новое пустое поле "куплено"
        let dir: number; // направление
        const pos1 = +elem.order + 10 * +elem.done; // текущая позиция
        if (sort === 9) { // если 9 меняем крестик на противоположный
          newDone = !elem.done;
          if (elem.content.indexOf('(x)') > -1) { //  меняем на противоположное присутствие в тексте (х)
            elem.content = elem.content.replace(/\(x\)/g, '');
          } else {
            elem.content = elem.content + '(x)';
          }
        }
        if (sort !== 9) { // если не 9 то снимает точно крестик (х)
          newDone = false;
          elem.content = elem.content.replace(/\(x\)/g, '');
        }
        const pos2 = +sort + 10 * +newDone; // * (sort !== 9); // позиция 2
        dir = pos2 - pos1; // направление

        if (dir > 0) { // закладываем сдвиг в вычисленном направлении
          elem.direction = '70px -170px -70px 170px';
        } else  if (dir < 0) {
          elem.direction = '-70px -170px 70px 170px';
        } else {
        }
        setTimeout(function() {
          elem.done = newDone;
          if (sort !== 9) {elem.order = sort; }
        this.ColorBtnClicked.emit();
      }.bind(this), 200 );
      setTimeout(function() {
        elem.direction = '0px 0px 0px 0px';
      }, 201 );
  }
}
