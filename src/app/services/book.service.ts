import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookData = new BehaviorSubject<any[]>([
    {
      id: 1,
      position: 1,
      title: 'Cook Book',
      author: 'Mark Twain',
      genre: 'Drama',
      loandate: '2021-01-01',
      returndate: '2021-01-10',
    },
    {
      id: 2,
      position: 2,
      title: 'Book 2',
      author: 'Bob Dylan',
      genre: 'Non-fiction',
      loandate: '2021-02-01',
      returndate: '2021-02-10',
    },
    {
      id: 3,
      position: 3,
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien',
      genre: 'Fiction',
      loandate: '2021-03-01',
      returndate: '2021-03-10',
    },
    {
      id: 4,
      position: 4,
      title: 'Book 4',
      author: 'Peter Pan',
      genre: 'Non-fiction',
      loandate: '2021-04-01',
      returndate: '2021-04-10',
    },
    {
      id: 5,
      position: 5,
      title: 'Book 5',
      author: 'Author 5',
      genre: 'Non-fiction',
      loandate: '2021-05-01',
      returndate: '2021-05-10',
    },
  ]);
  bookData$ = this.bookData.asObservable();

  constructor() {}

  getBooks(): Observable<any[]> {
    return this.bookData$;
  }

  editBook(updatedBook: any): void {
    const currentBooks = this.bookData.getValue();
    const updatedBooks = currentBooks.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    this.bookData.next(updatedBooks);
  }

  addBook(newBook: any): void {
    const currentBooks = this.bookData.getValue();
    const updatedBooks = [...currentBooks, newBook];
    this.bookData.next(updatedBooks);
  }

  selectedBook(bookId: number): Observable<any> {
    return new Observable((observer) => {
      const currentBooks = this.bookData.getValue();
      const selectedBook = currentBooks.find((book) => book.id === bookId);
      observer.next(selectedBook);
      observer.complete();
    });
  }

  deleteBook(bookId: number): void {
    const currentBooks = this.bookData.getValue();
    const updatedBooks = currentBooks.filter((book) => book.id !== bookId);
    this.bookData.next(updatedBooks);
  }

  filterBooks(criteria: string): Observable<any[]> {
    return this.bookData$.pipe(
      map((books) =>
        books.filter((book) =>
          Object.keys(book).some((key) =>
            book[key].toString().toLowerCase().includes(criteria.toLowerCase())
          )
        )
      )
    );
  }
}
