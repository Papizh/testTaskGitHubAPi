import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from 'src/app/models/users'

@Injectable({
  providedIn: 'root'
})
export class ServiceGitHubAPIService {

  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) {

  }

  getUser(userName = ' '): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userName}`);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?per_page=10`)
  }

}
