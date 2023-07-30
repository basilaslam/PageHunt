import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string | undefined;
  constructor(private router: Router){
    this.routerEvents = this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        console.log(event.url);
        this.url = event.url
      }
    })
  }
  routerEvents: any
  title = 'book-store';
}
