import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }      from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routes }            from './app.routes';
import {BookSearchComponent} from './components/bookSearch/bookSearch.component';
// import {BookListComponent} from './components/bookList/bookList.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BookSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [  ]  // add services here like "Logger"
})
export class AppModule { }
