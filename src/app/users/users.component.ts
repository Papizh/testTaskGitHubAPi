import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceGitHubAPIService } from '../services/serviceGitHubApi.service';
import { users } from '../models/users'
import { from } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userName = ""
  users: users[];
  constructor(private serviceGit: ServiceGitHubAPIService) {

  }


  ngOnInit(): void {
  }

  getUserList(userName) {
    this.serviceGit.getUser(this.userName)
      .subscribe(
        (response) => {
          console.log('response received')
          this.users = response;
          console.log(response)
        })
  }

  
  getUserAll(userName) {
    this.serviceGit.getUser(this.userName)
      .subscribe(
        (response) => {
          console.log('response received')
 
          console.log(response)
        })
  }
}

