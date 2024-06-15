import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatLabel],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.css',
})
export class AddBookFormComponent {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    public dialogRef: MatDialogRef<AddBookFormComponent>
  ) {
    this.bookForm = this.fb.group({
      id: [null, Validators.required],
      position: [null, Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      Genre: ['', Validators.required],
      loanDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
