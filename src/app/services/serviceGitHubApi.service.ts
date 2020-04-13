import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { users} from 'src/app/models/users'

@Injectable({
  providedIn: 'root'
})
export class ServiceGitHubAPIService {
  apiUrl = 'https://api.github.com/users/';
   public userName = "";

  constructor(private http: HttpClient) {

  }
  public getUser(userName): Observable<any> {
    return this.http.get<any>(this.apiUrl+ userName)
  }

}
