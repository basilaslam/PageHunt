import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TopBannerComponent } from './shared/components/top-banner/top-banner.component';
import { LayoutComponent } from './layout/layout.component';
import { shortenPipe } from './shared/pipes/shorten.pipe';
import { toInrPipe } from './shared/pipes/toINR.pipe';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    TopBannerComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HotToastModule.forRoot({
      autoClose: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
