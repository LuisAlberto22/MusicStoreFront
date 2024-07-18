import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeApiResponse } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "https://localhost:7136/api/home";
  httpClient = inject(HttpClient)
  //Angular Api (HttpClient)
  getData() {
    return this.httpClient.get<HomeApiResponse>(this.url)
  }

  constructor() {

  }

}
