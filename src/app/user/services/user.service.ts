import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Object } from '../interfaces/object';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL_API = 'https://api.restful-api.dev/objects';
  //injects
  private readonly http = inject(HttpClient);
  private headers = new HttpHeaders();

  constructor() { }

  public get(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.URL_API}`);
  }
}
