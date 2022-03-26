import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'hosttech-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = []
  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userService.getUsers().subscribe(resp => {
      this.users = resp
    }, (err) => {
      console.log(err)
    })
    console.log(this.users)
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(response => {
      console.log('Usuario Excluido');
    }, (err) => {
      console.log(err)
    }, () => {
      this.getUser();
    })
  }

}
