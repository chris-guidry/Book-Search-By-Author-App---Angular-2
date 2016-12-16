import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import {BookSearchService} from '../../services/bookSearch/bookSearch.service';

@Component({
  selector: 'BookSearch',
  templateUrl: 'app/components/bookSearch/bookSearch.html',
  styleUrls: ['app/components/bookSearch/bookSearch.css'],
  providers: [BookSearchService]
})
export class BookSearchComponent {
  loaded: Boolean = true;
  books: Observable<Array<any>>;
  authors = new FormControl();

  constructor(private bookSearchService: BookSearchService) {
    this.books = this.authors.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(authors => this.bookSearchService.get(authors));
  }
}
