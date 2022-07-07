import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kinopoiskCopy';

  constructor(private http: HttpClient) {
  }

  search = () => {

    this.http.get('https://api.github.com/users/venbergp').subscribe(x => {
      // console.log('response')
      // console.log(x)
      // console.log(JSON.parse(x.toString()))
    })
  }

  ngOnInit() {

  }
}
