import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterCriteria = new BehaviorSubject<string>('');
  filterCriteria$ = this.filterCriteria.asObservable();

  setFilterCriteria(criteria: string) {
    this.filterCriteria.next(criteria);
  }
}
