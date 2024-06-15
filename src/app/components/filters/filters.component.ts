import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterService } from '../../services/filter.service'; // Adjust the path as necessary

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'], // Ensure it's styleUrls
})
export class FiltersComponent {
  selected = '';

  options = ['Title', 'Author', 'Genre', 'Loan Date', 'Return Date'];

  constructor(private filterService: FilterService) {}

  onFilterChange(value: string) {
    this.filterService.setFilterCriteria(value);
    console.log('Filter criteria:', value);
  }
}
