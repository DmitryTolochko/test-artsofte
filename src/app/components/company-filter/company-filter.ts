import { Component, DestroyRef, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DictionariesService } from '../../services/dictionaries';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-company-filter',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './company-filter.html',
  styleUrl: './company-filter.scss'
})
export class CompanyFilter {
  @Output() filterChange = new EventEmitter<FormGroup>();

  dictService: DictionariesService = inject(DictionariesService);
  private destroyRef = inject(DestroyRef);

  types: string[] = [];
  industries: string[] = [];

  filters: FormGroup = new FormGroup( {
    "business_name": new FormControl(""),
    "type": new FormControl(""),
    "industry": new FormControl("")
  })

  constructor () {
    this.dictService.getAllIndustries()
    .subscribe((result: string[]) => this.industries = result);
    this.dictService.getAllTypes()
    .subscribe((result: string[]) => this.types = result);
  }

  ngOnInit() {
    this.filters.valueChanges
    .pipe(
      debounceTime(300),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe(() => {
      this.filterChange.emit(this.filters);
    });
  }
}
