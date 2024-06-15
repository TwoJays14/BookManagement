import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, TitleCasePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { BookService } from '../../services/book.service';
import { Observable, of, combineLatest } from 'rxjs';
import { FilterService } from '../../services/filter.service';
import { map, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, TitleCasePipe, NgFor, ModalComponent, AsyncPipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'], // Ensure this is correctly plural
})
export class TableComponent implements OnInit {
  @Input() isModalOpen!: boolean;
  isModal: boolean = false;

  bookData$: Observable<any[]>;
  filteredData$: Observable<any[]>;
  filterCriteria: string = '';
  displayedColumns: string[] = [
    'position',
    'title',
    'author',
    'genre',
    'loandate',
    'returndate',
  ];
  bookData: any[] = [];

  constructor(
    private bookService: BookService,
    private filterService: FilterService,
    private dialog: MatDialog
  ) {
    this.bookData$ = this.bookService.getBooks().pipe(
      catchError((error) => {
        console.error('Error fetching book data:', error);
        return of([]); // Return an empty array in case of error
      })
    );
    this.filteredData$ = of([]); // Initialize filteredData$ with an empty Observable
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.bookData = data;
      this.applyFilter();
    });

    this.filterService.filterCriteria$.subscribe((criteria) => {
      this.filterCriteria = criteria;
      this.applyFilter();
    });

    console.log('Is modal open table component: ', this.isModalOpen);
  }

  applyFilter(): void {
    this.filteredData$ = combineLatest([
      this.bookData$,
      of(this.filterCriteria),
    ]).pipe(
      map(([books, criteria]) =>
        this.sortBooks(this.filterBooks(books, criteria))
      ),
      tap((sortedBooks) => console.log('Sorted data: ', sortedBooks)),
      catchError((error) => {
        console.error('Error applying filter:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }

  // TODO: fix filterBooks method

  filterBooks(books: any[], criteria: string): any[] {
    if (!criteria) {
      console.log('No criteria: ', books);
      return books;
    }

    // console.log('Filter criteria:', criteria.replace(/\s+/g, '').toLowerCase());

    const filteredBooks = books.filter((book) =>
      Object.keys(book).find((key) =>
        book[key]
          .toString()
          .replace(/\s+/g, '')
          .toLowerCase()
          .includes(criteria.toLowerCase())
      )
    );
    console.log('Filtered data: ', filteredBooks);
    return filteredBooks;
  }

  // TODO: fix sortBooks method
  sortBooks(books: any[]): any[] {
    const sortedBooks = books.slice().sort((a, b) => a.position - b.position);
    console.log('Sorted data: ', sortedBooks);
    return sortedBooks;
  }

  openModal(id: number) {
    this.isModal = true;
    this.displayModal(id);
  }

  displayModal(id: number) {
    this.bookService.selectedBook(id).subscribe((selectedBook) => {
      console.log(`Displaying modal for book with id: ${id}`, selectedBook);

      this.dialog.open(ModalComponent, {
        data: selectedBook,
      });
    });
  }
}
