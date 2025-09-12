import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {
  url = `https://faker-api.milki.space`;

  async getAllIndustries(): Promise<string[]> {
    const response = await axios.get(this.url + `/industries`);

    return response.data ?? [];
  }

  async getAllTypes(): Promise<string[]> {
    const response = await axios.get(this.url + `/types`);

    return response.data ?? [];
  }
}
