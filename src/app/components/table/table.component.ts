import { NgFor, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, TitleCasePipe, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  displayedColumns: string[] = [
    'position',
    'title',
    'author',
    'Genre',
    'loanDate',
    'returnDate',
  ];

  bookData = [
    {
      position: 1,
      title: 'Book 1',
      author: 'author',
      Genre: 'Non-fiction',
      loanDate: '2021-01-01',
      returnDate: '2021-01-01',
    },
    {
      position: 2,
      title: 'Book 2',
      author: 'author',
      Genre: 'Non-fiction',
      loanDate: '2021-01-01',
      returnDate: '2021-01-01',
    },
    {
      position: 3,
      title: 'Book 3',
      author: 'author',
      Genre: 'Non-fiction',
      loanDate: '2021-01-01',
      returnDate: '2021-01-01',
    },
    {
      position: 4,
      title: 'Book 4',
      author: 'author',
      Genre: 'Non-fiction',
      loanDate: '2021-01-01',
      returnDate: '2021-01-01',
    },
    {
      position: 5,
      title: 'Book 5',
      author: 'author',
      Genre: 'Non-fiction',
      loanDate: '2021-01-01',
      returnDate: '2021-01-01',
    },
  ];

  displayModal(id: number) {
    console.log(`Displaying modal for book with id: ${id}`);

    const selectedBook = this.bookData.find((book) => book.position === id);

    console.log(selectedBook);
  }
}
