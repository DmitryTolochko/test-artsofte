import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DictionariesService } from '../../services/dictionaries';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-company-filter',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './company-filter.html',
  styleUrl: './company-filter.scss'
})
export class CompanyFilter {
  @Output() filterChange = new EventEmitter<FormGroup>();

  dictService: DictionariesService = inject(DictionariesService);

  types: string[] = [];
  industries: string[] = [];

  filters: FormGroup = new FormGroup( {
    "business_name": new FormControl(""),
    "type": new FormControl(""),
    "industry": new FormControl("")
  })

  constructor () {
    this.dictService.getAllIndustries().then((result: string[]) => this.industries = result);
    this.dictService.getAllTypes().then((result: string[]) => this.types = result);
  }

  ngOnInit() {
    this.filters.valueChanges
    .pipe(debounceTime(300))
    .subscribe(() => {
      this.filterChange.emit(this.filters);
    });
  }
}
