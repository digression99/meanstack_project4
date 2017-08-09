import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name : string = 'Steve Smith';
  age : number;
  email : string;
  address : Address;
  hobbies : string[]; // array
  anytypes : any; // any for single value
  posts : Post[];
  isEdit : boolean = false;

  constructor(private dataService : DataService) {
    console.log("constructor ran...");
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  myEvent() {
    this.name = "kimilsik";
    console.log('hello');

    this.hobbies.push('new hobby');
  }

  ngOnInit() {
    console.log("init ran" +
      "...");
    this.name = "John Doe";
    this.age = 30;
    this.email = "jin@jin.com";
    this.address = {
      street : '50 main st',
      city : 'boston',
      state : 'ma'
    };

    this.hobbies = ['watch movies', 'listen to music'];

    // subscribe because the type is observable.
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  addHobby(value : string) {
    this.hobbies.unshift(value);
    return false;
  }

  deleteHobby(val : string) {
    this.hobbies.splice(this.hobbies.indexOf(val), 1);
  }


}

interface Address {
  street : string,
  city : string,
  state : string
}

interface Post {
  id : number,
  title : string,
  body : string,
  userId : number
}
