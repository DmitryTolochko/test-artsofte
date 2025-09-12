import { Component, inject } from '@angular/core';
import { CompanyInfo } from '../../interfaces/company-list-interface';
import { CompanyItem } from '../company-item/company-item';
import { CompaniesService } from '../../services/companies';
import { FormGroup, FormsModule } from '@angular/forms';
import { CompanyFilter } from '../company-filter/company-filter';
import { CompanySort } from '../company-sort/company-sort';
import { SortConfig } from '../../interfaces/sort-config';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem, FormsModule, CompanyFilter, CompanySort, Loader],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss'
})
export class CompanyList {
  filteredList: CompanyInfo[] = [];
  sortConfig: SortConfig | undefined;
  filters: FormGroup | undefined;
  currentPage: number = 1;
  isDataLoaded: boolean = false;

  compService: CompaniesService = inject(CompaniesService);

  constructor() {
    this.getList(this.sortConfig, this.filters);
  }
  
  onSortChange(sortConfig: SortConfig) {
    this.isDataLoaded = false;
    this.sortConfig = sortConfig;
    this.currentPage = 1;
    this.getList(sortConfig, this.filters);
  }

  onFilterChange(filters: FormGroup) {
    this.isDataLoaded = false;
    this.filters = filters;
    this.currentPage = 1;
    this.getList(this.sortConfig, filters);
  }

  changePage(increment: number) {
    this.isDataLoaded = false;
    if (this.currentPage + increment === 0) {
      return;
    }
    this.currentPage += increment;
    this.getList(this.sortConfig, this.filters);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getList (sortConfig: SortConfig | undefined, filters: FormGroup | undefined) {
    this.compService.getAllCompaniesInfo(sortConfig, filters, this.currentPage).then((compList: CompanyInfo[]) => {
      this.filteredList = compList;
      this.isDataLoaded = true;
    })
  }
}
