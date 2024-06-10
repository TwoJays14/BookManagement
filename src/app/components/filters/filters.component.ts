import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  selected = '';

  options = ['Title', 'Author', 'Genre', 'Loan Date', 'Return Date'];
}
