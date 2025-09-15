import { Injectable } from '@angular/core';
import { CompanyInfo } from '../interfaces/company-info';
import { SortConfig } from '../interfaces/sort-config';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompaniesDTO } from '../interfaces/companies-dto';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private url = `https://faker-api.milki.space`;

  constructor(private http: HttpClient) { }

  getAllCompaniesInfo(
    sortConfig: SortConfig = {
      field: 'id',
      direction: 'asc'
    },
    filters: FormGroup = new FormGroup( {
      "business_name": new FormControl(""),
      "type": new FormControl(""),
      "industry": new FormControl("")
    }),
    currentPage: number = 1
  ): Observable<CompaniesDTO> {
    let query = this.url + `/companies?page=${currentPage}&per_page=15`;
    if (filters.value["industry"] !== "") {
      query += `&industry=${filters.value["industry"]}`;
    }
    if (filters.value["type"] !== "") {
      query += `&company_type=${filters.value["type"]}`;
    }
    if (filters.value["business_name"] !== "") {
      query += `&q=${filters.value["business_name"]}`;
    }

    query += `&sort_by=${sortConfig.field}&sort_order=${sortConfig.direction}`;

    return this.http.get<CompaniesDTO>(query);
  }

  getCompanyDetails(id: number): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(this.url + `/companies/${id}`);
  }
}
