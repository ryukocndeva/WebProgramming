import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  user: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  LoginUser() {
    if(this.user == "Admin" && this.password=="admin123") {
      console.log("Welcome to our channel");
    }
  }

}
