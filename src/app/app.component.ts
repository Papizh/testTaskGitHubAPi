import { Component } from '@angular/core';
import { ServiceGitHubAPIService } from './services/serviceGitHubApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: string[]
  title = 'testTaskGitHubAPi';

  constructor(private seviceGit: ServiceGitHubAPIService) {

  }

  search() {
    this.seviceGit.getUser()
      .subscribe((response) => {
        this.users = response;
        console.log(response);
      })
  }
}
