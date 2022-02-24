import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SharedDogService {
  constructor(private http: HttpClient) {}

  getRandomDog() {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random');
  }
}