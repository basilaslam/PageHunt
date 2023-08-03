import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toInrPipe } from './toINR.pipe';
import { shortenPipe } from './shorten.pipe';



@NgModule({
  declarations: [
    toInrPipe,
    shortenPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    toInrPipe,
    shortenPipe
  ]
})
export class PipesModule { }
