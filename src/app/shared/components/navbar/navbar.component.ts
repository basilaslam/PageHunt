import { Component, Inject, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent{
  @Input()sidenav!: MatSidenav;

  isCurrentHome: boolean
  cartItems: number | undefined = 1

  private cartSubscription: Subscription | undefined;


  constructor(private router: Router ,){
     this.isCurrentHome = router.url === '/'
  }
  onToggleSidenav(){
    this.sidenav.toggle()
  }

  ngOnInit(){
    // this.cartSubscription = this.cartService.getCartDataObservable().subscribe(()=>{
    //   this.updateCartData()
    // })
  }

  updateCartData(){
    // const cartData = this.cartService.getCart()
    // this.cartItems = cartData.length
  }


  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
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
