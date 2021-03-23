import { Component } from '@angular/core';
import {Repos} from './repos';
import {GithubService} from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  repos: Repos[];

  loading = false;
  errorMessage;

  constructor(private githubService: GithubService) {
  }

  // tslint:disable-next-line:typedef
  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName)
      .subscribe(
        (response) => {
          console.log('response received');
          this.repos = response;
        },
        (error) => {
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          console.error('Request completed');
          this.loading = false;
        });
  }
}
