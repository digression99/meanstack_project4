
20170809

new meanstack project
[URL](pseudocoder.rocks)
=============================

### 사용 기술

- passportjs<br>
- json web token -> jwt ->token generation & authentication<br>
- cors<br>
- mongoose odm<br>
- angular 2 / angular cli<br>
- angular router, http module<br>
- angular2 jwt<br>
- auth guard<br>
- angular flash message module<br>
- deploy -> heroku<br>

> cors -> different domain name 에서 데이터를 읽을 수 있게 한다.<br>
  search cors npm<br><br>
> angular 2 use<br>
  angular 2 crash course 를 추천.. 이거 끝나면 보고 다시 이해해보자.<br>
    - 사용하기<br>
    ```
    npm install -g angular-cli<br>
    ng new angular-src // angular-src 는 원하는 파일이름으로 생성하면 된다.<br>
    nodemon // backend 를 돌린다.<br>
    ```

다른 터미널에서-

```
cd ./angular-src
ng serve
```
-> port 4200 에서 앱이 열림 -> 확인한다.

모든 것들은 components로 된다.
component 생성하기
4200-
```
cd src/app/components
ng g component navbar // g -> generate
```

서비스 생성하기 -> ng g service validate // in services folder

### PROJECT SCHEMA

##### informations needed for this project
- webstorm es6 : preferences -> languages & frameworks -> javascript => change version to es6
- git conflict problems
  - first, in locally, you should add and commit to your local master.
  - then, you can push it to the remote repo.
  - finally, pull that data to your local master.

#### shell command
```
git add .
git commit -m "for pull"
git push origin master
git pull origin master
```

##### some initial changes from project3
- use local mongodb until the project is finished then use mlab.
-> shell : mongod --dbpath ./mongodb
-> db url : 'mongodb://localhost:27017/meanstack_project4'
-> in mongo shell : use meanstack_project4

- use port 3000 incase of http.

##### my goal for this project

0. purpose
  - the goal is to make my own portfolio-ish bloggy site.
  - not that fancy, but I can add whatever I want to this site.
  - I can immediately add some webgl project or my new website starting from this site.
  - I can do all kinds of experiment with this site.

1. add full crud functionality to membership management.
-> add delete account, add update account info.
-> membership functionality is used to add some comments.

2. add tables for any post and add full crud functionality to it.
-> for example, if I put some li to navbar like my profile,

3. use dashboard to your own portfolio dashbard.



### future goals
- use membership functionality to make blog for each person.
- -> if you log in, then it's your own porfolio site.
- -> 

### CHECKLIST

- [ ] 20170810 : add post making in the dashboard.

#### plan
- make a component name = "postdata"
- add a service name = "postservice"
- make a router for dashboard/add, dashboard/edit, dashboard/delete.
- connect it to user and comments


- comments -> component name = "comment"
- service name = "commentService"
- add a form below the from of post form.

- [ ] add delete user account, edit user account functionality.



### issues
  1. post request works when after build. can't I do work in developing mode?
  2. post request returns 404 not found.
  -> sol : make db for the specific port. There was no db for meanstack_project4.
  + set the url in authenticateUser to `http://localhost:3000/users/authenticate.`
  3.


# Angular 4 crash course
========================
  - angular is cross platform framework.
  - typescript -> similar to java, C<br>
    in javascript class, you should use prototype to make the method for that class.<br>
    in typescript, you dont need that.
  - if you're going to use ng serve and in another terminal you want to do some generation,
  you should be in the folder angular-src...
    
```
import {Component} from '@angular/core';

// component -> sections of UI can be broken into encapsulated components.
// decorator -> attach metadata to our component.
#Component({
  selector : 'my-app', // custom html tag.
  template : '<h1> hello, {{name}}</h1>' // html or dynamic properties.
})

export class AppComponent {
  name = 'Angular';
}

// services -> classes that send data and functionality across components.
// ideal place for ajax calls.
import {Injectable} from '@angular/core';

import {User} from './user'; // class or interface defining user.
import {USERS} from './mock-users'; // data, json.

@Injectable()
export class UserService {
  getUsers() : User[] {
    return USERS;
  }
}
```

- angular cli -> command line interface.
- dependencies -> nodejs, npm

- coding -> in pseudocoder app
```
starting project
in shell
ng new ang4app // init the project
```

- e2e -> end to end testing.
- app.module.ts -> need to add to here when you make something.
-spec.ts -> for testing.

- make components
  1. make dir
  2. in shell, `ng g component components/user`

to use, in app.component.html -> `<app-user></app-user>` ( selector)<br>
or inject in any \*.component.html

- {{name}} -> string interpolation

- you can't dynamically add field in the object.

- you can make interface and reuse it.
```
address : Address
...
...
interface Address {
    street : string,
    city : string,
    state : string
}

```

- anytypes : any; // any for single value or dynamic field??

### adding an event
```

in html,
<button (click)="onClick()">Click Me</button>

in user.components.ts,
onClick() {
  console.log('hello');
}

```

- typescript array use

`array.splice(index, deleteCount) : delete the item starting in index, deleting deleteCount of the item.`<br>

- if I use ngModel, then it changes the data immediately. -> responsive.
```
in html,
<label for="name">Name : </label>
<input type="text" [(ngModel)]="name" name="name">

in .ts,
export class User {
  name : string,
  ...
}

```

### using service

```
in shell,
ng g service services/data

in app.module.ts,
import {DataService} from './services/data.service';

...
providers : [DataService];

in user.component.ts,
import {DataService} from '../../services/data.service';

constuctor(private dataService : DataService) { ..
```

### post request
- http://jsonplaceholder.typicode.com/

```
in app.module.ts,
import {HttpModule} from '@angular/http';
...
imports: [
    HttpModule];

in data.service,
getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }
```

### use router
```
in app.module.ts,
import {RouterModule, Routes} from '@angular/router';
// add it to app.


```










