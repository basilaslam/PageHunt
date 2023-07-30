import { Component, Inject, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent{
  @Input()sidenav!: MatSidenav;

  isCurrentHome: boolean



  constructor(private router: Router){

     this.isCurrentHome = router.url === '/'



  }
  onToggleSidenav(){
    this.sidenav.toggle()
  }





  ngOnInit(){

  }


  toggleCollapse(collapse: HTMLDivElement) {

    const isCollapsed = collapse.classList.contains('hidden');

    collapse.classList.toggle('hidden');
  }
  userToggleCollapse(collapse: HTMLDivElement) {

    const isCollapsed = collapse.classList.contains('hidden');

    collapse.classList.toggle('hidden');
  }
}
