import { Component , OnInit } from '@angular/core';
import {AuthService} from './auth.service';
// import { URLHelper } from './URLHelper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // currentURLs=URLHelper.urls;
  title = 'myApp';
  constructor(private _authService:AuthService) { }
  ngOnInit(){
    // localStorage.removeItem('token');
  }
  // currentURLs=URLHelper.urls;
}
