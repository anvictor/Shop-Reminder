import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {LocalStorageService} from 'angular-web-storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService, public localStor: LocalStorageService) {}

  title = 'Shop-Reminder-App';
  activeScreen = 'inp';
  // activeAdv = 'slp';
  listing = '';
  shopData = [];
  oldData = [];
  counter: string;
  onClickScreenBtn(screen) {
    this.activeScreen = screen;
    if (screen === 'old') {
      this.saveOldText();
    }
  }

  onlistingAreaChanged(listing) { // слушаем событие изменился listing и отправляем текст в DataService
    if (listing.indexOf('@blur@') > -1) { // Если Покинуто текстовое поле,
      listing.replace('@blur@', ''); // то очистить этот признак
      this.listing = this.dataService.rebuildText(); // и отправить на перестройку
      this.activeScreen = 'shop';
    } else {
    this.shopData = this.dataService.rebuildData(listing);
    }
  }

  ColorBtnClicked() { // слушаем нажатие на цвето-сортировку
    this.listing = this.dataService.rebuildText();
    this.ajaxload();
  }

  OldClicked(value) { // слушаем нажатие на старые списки elem+'@'+act (на что нажали, какая кнопка)
    if (value.split('@')[1] === 'X') {
      this.removeStorage(value.split('@')[0]);
      this.listing = ''; this.shopData = this.dataService.rebuildData(this.listing);
    }
    if (value.split('@')[1] === 'ok') {
      this.listing = 'Name: ' + value.split('@')[0] + ',\n' + this.getStorage(value.split('@')[0]);
      this.shopData = this.dataService.rebuildData(this.listing);
      this.activeScreen = 'shop';
    }
    this.showOld();
  }
  clearList() {
    this.listing = '';
    this.shopData = this.dataService.rebuildData('');
  }

  saveOldText() {
    if (this.dataService.rebuildText()) {
      const text = this.dataService.rebuildText();
      const coma = +this.dataService.rebuildText().indexOf(',');
      const name = text.substring(6, coma);
      const body = text.substring(coma + 2);
      this.setStorage(name, body);
      this.showOld();
    }
 }

  setStorage(name, body) {
    this.localStor.set(name, body, 10, 'w');
  }

  getStorage(key) {
    return this.localStor.get(key);
  }

  removeStorage(key) {
    this.localStor.remove(key);
  }

  // clearStorage() {
  //   this.localStor.clear();
  // }

  showOld() {
    this.oldData = [];
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        this.oldData.push(localStorage.key(i));
      }
    }
  }
// счетчик посещений

  ajaxload() {
    const xhr = new XMLHttpRequest();
    let counterLoc = '';
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 ) {
        if (this.status >= 200 && xhr.status < 300) {
          counterLoc = this.responseText;
        }
      }
    };
    xhr.open('GET', 'php/ajax.php');
    xhr.send();
    setTimeout(function() {
      this.counter = counterLoc;
    }.bind(this), 2000 );
  }
// счетчик посещений
  ngOnInit() {
    // счетчик посещений
    this.counter = '';
    // setTimeout(function() {
    //   this.ajaxload();
    // }.bind(this), 2000 );

    this.showOld();
  }
}
