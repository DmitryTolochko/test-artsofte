import { Component, input } from '@angular/core';
import { CompanyInfo } from '../../interfaces/company-info';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-item',
  imports: [RouterModule],
  templateUrl: './company-item.html',
  styleUrl: './company-item.scss'
})
export class CompanyItem {
  companyInfo = input.required<CompanyInfo>();
}
