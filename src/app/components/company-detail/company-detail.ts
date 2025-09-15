import { Component, DestroyRef, inject, input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompanyInfo } from '../../interfaces/company-info';
import { CompaniesService } from '../../services/companies';
import { Loader } from '../loader/loader';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-company-detail',
  imports: [RouterModule, Loader],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss'
})
export class CompanyDetail {
  private destroyRef = inject(DestroyRef);

  isDataLoaded: boolean = false;

  id: number | undefined;
  companyInfo: CompanyInfo = {
    id: 0,
    uid: '',
    business_name: '',
    suffix: '',
    industry: '',
    type: '',
    catch_phrase: '',
    phone_number: '',
    full_address: '',
    latitude: 0,
    longitude: 0,
    logo: ''
  };
  compService: CompaniesService = inject(CompaniesService);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.compService.getCompanyDetails(this.id)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((companyInfo: CompanyInfo) => {
      this.companyInfo = companyInfo;
      this.isDataLoaded = true;
    })
  }
}
