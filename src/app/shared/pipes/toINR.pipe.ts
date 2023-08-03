import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInr'
})
export class toInrPipe implements PipeTransform {
  transform(usdAmount: string): string {
    // You would need the current exchange rate here
    const exchangeRate: number = 74.5; // Example exchange rate
    const inrAmount: number = parseFloat(usdAmount) * exchangeRate;
    return `₹${inrAmount.toFixed(1)}`;
  }
}
