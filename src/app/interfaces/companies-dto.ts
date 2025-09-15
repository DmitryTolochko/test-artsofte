import { CompanyInfo } from "./company-info";

export interface CompaniesDTO {
    data: CompanyInfo[],
    has_next: boolean,
    has_prev: boolean,
    limit: number,
    offset: number,
    page: number,
    per_page: number,
    total: number,
    total_pages: number
}