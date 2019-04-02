import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InpComponent} from './inp-component/inp.component';
import {ShopComponent} from './shop-component/shop.component';
import {OldComponent} from './old-component/old.component';
import {HelpComponent} from './help-component/help.component';
import {AdvComponent} from './adv-component/adv.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularWebStorageModule} from 'angular-web-storage';
import {VisitedComponent} from './visited-component/visited.component';

@NgModule({
  declarations: [
    AppComponent,
    InpComponent,
    ShopComponent,
    OldComponent,
    HelpComponent,
    AdvComponent,
    VisitedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
