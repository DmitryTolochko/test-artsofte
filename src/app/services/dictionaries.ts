import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {
  private url = `https://faker-api.milki.space`;

  constructor(private http: HttpClient) { }

  getAllIndustries(): Observable<string[]> {
    return this.http.get<string[]>(this.url + `/industries`);
  }

  getAllTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.url + `/types`);
  }
}
