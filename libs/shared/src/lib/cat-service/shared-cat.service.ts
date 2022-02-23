import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedCatService {
  constructor(private http: HttpClient) {}

  getRandomCat() {
    return this.http.get('https://api.thecatapi.com/v1/images/search')
      .pipe(map((res: any) => res[0]));
  }
}