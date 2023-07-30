
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/ui/banner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BenefitsComponent } from './components/ui/benefits/benefits.component';
import { AboutComponent } from './components/ui/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BenefitsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule

  ],
  exports: [
    BannerComponent,
    HomeComponent
  ]
})
export class HomeModule { }
