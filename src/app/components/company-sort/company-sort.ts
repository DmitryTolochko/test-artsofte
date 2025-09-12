import { Component, EventEmitter, Output } from '@angular/core';
import { SortConfig } from '../../interfaces/sort-config';

@Component({
  selector: 'app-company-sort',
  imports: [],
  templateUrl: './company-sort.html',
  styleUrl: './company-sort.scss'
})
export class CompanySort {
  @Output() sortChange = new EventEmitter<SortConfig>();

  currentSort: SortConfig = { field: '', direction: 'asc' };

  sortBy(field: string) {
    if (this.currentSort.field === field) {
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSort.field = field;
      this.currentSort.direction = 'asc';
    }
    
    this.sortChange.emit({...this.currentSort});
  }

  getButtonClass(field: string): string {
    if (this.currentSort.field !== field) return 'company-sort__button';
    return this.currentSort.direction === 'asc' 
      ? 'company-sort__button company-sort__button_sort-asc' 
      : 'company-sort__button company-sort__button_sort-desc';
  }
}
