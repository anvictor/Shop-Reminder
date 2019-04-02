
import {Item} from './item';

export class DataService {
  private data: Item[] = [];

  rebuildData(text) {
        this.data = [];
        const arr = text.split(',');
         arr.forEach((item) => {
           item = item.trim();
           item = item.replace(/\s+/g, ' ');
           let done = false;
           let order = 0;
          if (item) { // присваиваем прорядок согласно номеру 1)-8), если он есть
            if (item.indexOf('1)') > -1) {
              order = 1;
            } else if (item.indexOf('2)') > -1) {
              order = 2;
            } else if (item.indexOf('3)') > -1) {
              order = 3;
            } else if (item.indexOf('4)') > -1) {
              order = 4;
            } else if (item.indexOf('5)') > -1) {
              order = 5;
            } else if (item.indexOf('6)') > -1) {
              order = 6;
            } else if (item.indexOf('7)') > -1) {
              order = 7;
            } else if (item.indexOf('8)') > -1) {
              order = 8;
            }
            if (item.indexOf('(x)') > -1) {
              done = true;
            }
          }
          if (item === '' || item === ' ') {} else { // если элемент не пустой и не пустой пробел, то создаем его
          const item0 = new Item(order, item, done, '0px 0px 0px 0px' );
          this.data.push(item0);
          }
         });
    return this.data;
  }

  rebuildText() {// после нажатия на сортировку модифицируем список: Заглавие, номера done(х)
    if (this.data.length) { // if not empty
    let text = '';
    this.data.sort((a: Item, b: Item) => { // сортируем по цифрам, если есть
      if (a.order < b.order) {
        return -1;
      } else if (a.order > b.order) {
        return 1;
      } else {
        return 0;
      }
    });

    // формируем из первого элемента заголовок
      if ( this.data[0].content.indexOf('Name:') > -1 ) {// Если есть "name:"
        this.data[0].order = 0;
        this.data[0].content = this.data[0].content.replace('0)', '');
      } else {
        const item: Item = {order: 0, content: 'Name: ' + this.data[0].content, done: false, direction: '0px 0px 0px 0px'};
        this.data.unshift(item);
      }
    // формируем текст первый элемент - заголовок
    for (let i = 0; i < this.data.length; i++) {
      if ((this.data[i].content.indexOf('Name:') > -1) && i === 0) {
        this.data[0].content = this.data[0].content.replace('0)', '');
        text = text + this.data[i].content;
      } else {
        // Кроме первого элемента-заглавия, добавляем / (заменяем) в тексте номера 1)-8)
        if (this.data[i].order === 9) {
        } else {
          if (this.data[i].content.charAt(1) === ')') {
            this.data[i].content = this.data[i].order + this.data[i].content.slice(1); // сменить цифру
          } else {
            this.data[i].content = this.data[i].order + ') ' + this.data[i].content;
          } // создать цифру и скобку
        }
        text = text + ',\n' + this.data[i].content;
      }
    }
    return text;
  } // if not empty
  }
}
