import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular-complete-guide!!!';

  username: string = '';

  setUsername(){
    this.username = 'Tamil'
  }

  resetUsername(event){
    this.username = '';
  }

}
