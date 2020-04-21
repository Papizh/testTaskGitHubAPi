import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceGitHubAPIService } from '../services/serviceGitHubApi.service';
import { User } from '../models/users'
import { from } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  userName = ""
  userList;
  users: User;
  
  constructor(private serviceGit: ServiceGitHubAPIService) {

  }


  ngOnInit(): void {
    this.getAllUser();
  };


  getOneUser() {
    this.serviceGit.getUser(this.userName)
      .subscribe(
        (response) => {
          console.log('response received')
          this.userList = response;
          console.log(this.userList)
        })
  }

  getAllUser(){
    this.serviceGit.getUsers()
    .subscribe(users => {
      this.users = users;
      console.log(users)
    })
  }
}
