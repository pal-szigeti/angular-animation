import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, InfiniteScrollModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }