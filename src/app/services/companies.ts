import { Injectable } from '@angular/core';
import { CompanyInfo } from '../interfaces/company-list-interface';
import axios from 'axios';
import { SortConfig } from '../interfaces/sort-config';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  url = `https://faker-api.milki.space`;

  async getAllCompaniesInfo(
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
  ): Promise<CompanyInfo[]> {
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

    const response = await axios.get(query);
    return response.data.data ?? [];
  }

  async getCompanyDetails(id: number): Promise<CompanyInfo> {
    const response = await axios.get(this.url + `/companies/${id}`);
    return response.data;
  }
}
