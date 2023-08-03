import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:"shorten"
})
export class shortenPipe implements PipeTransform{
   transform(value: string) {
    if(value.length>15){
      return value.slice(0, 15) + "....";
    }
       return value
   }
}
