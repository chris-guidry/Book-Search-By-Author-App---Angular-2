import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Book } from '../../components/bookSearch/book';

@Injectable()
export class BookSearchService {
  constructor (private http: Http) {}
  private bookSearchUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=10&fields=items(volumeInfo(title,authors,publishedDate,description,imageLinks,previewLink))&q=inauthor:';

  get(authors: string): Observable<Book[]> {
    return this.http.get(this.bookSearchUrl + authors)
                    .map(this.extractData)
                    .catch(this.handleError);
  };
  private extractData(res: Response) {
    let body = res.json();
    // console.log('body.items: ' + JSON.stringify(body.items));
    return body.items;
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
