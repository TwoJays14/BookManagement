import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AddBookFormComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  @Input() isModalOpen!: boolean;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('AddBookComponent', this.isModalOpen);
  }

  constructor(private dialog: MatDialog) {}

  openAddBookModal() {
    this.dialog.open(AddBookFormComponent, {
      
    });
  }
}
