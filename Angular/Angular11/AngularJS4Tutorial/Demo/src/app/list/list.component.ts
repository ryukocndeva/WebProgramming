import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title:string = "Alphabets";

  listItems: any[] = ['A', 'B', 'C', 'D'];

  constructor() { }

  ngOnInit(): void {
  }

}
