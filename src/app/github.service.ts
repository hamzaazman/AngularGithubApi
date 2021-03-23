import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getRepos(username: string): Observable<any>{
    return this.http.get(this.baseUrl + 'users/' + username + '/repos');
  }

}
