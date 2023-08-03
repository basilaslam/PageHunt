import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnDestroy, OnInit{
  @Input()sidenav!: MatSidenav;

  url: string = ''
  cartItems: number | undefined
  subs = new SubSink()
  private cartSubscription: Subscription | undefined;


  constructor(private router: Router , private cartService: CartService){
  }


  onToggleSidenav(){
    this.sidenav.toggle()
  }

  ngOnInit(){
    this.subs.add(this.router.events.subscribe((event => {
      if(event instanceof NavigationEnd){
        let url = event.url.split('/')
        this.url = url.slice(0, 2).join('/')

      }
    })))
    this.url = this.router.url

    this.subs.add(this.cartSubscription = this.cartService.getCartDataObservable().subscribe(()=>{
      this.updateCartData()
    }))
  }

  updateCartData(){
    const cartData = this.cartService.getCart()
    this.cartItems = cartData.length
  }



  toggleCollapse(collapse: HTMLDivElement) {

    const isCollapsed = collapse.classList.contains('hidden');

    collapse.classList.toggle('hidden');
  }
  userToggleCollapse(collapse: HTMLDivElement) {

    const isCollapsed = collapse.classList.contains('hidden');

    collapse.classList.toggle('hidden');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

}
