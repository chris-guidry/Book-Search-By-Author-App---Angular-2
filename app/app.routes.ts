import { Routes } from '@angular/router';
import {BookSearchComponent} from './components/bookSearch/bookSearch.component';
// import {BookListComponent} from './components/bookList/bookList.component';

export const routes: Routes = [
  { path: '',            component: BookSearchComponent },
  { path: 'bookSearch',  component: BookSearchComponent }
];
