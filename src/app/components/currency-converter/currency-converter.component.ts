import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  currentBaseCurrency: string = 'BTC';
  currentPairCurrency: string = 'MDL';
  exchangeRate: number = 635784.19;
  conversionInput: number = 0;
  conversionResult: number = 0;
  error: string = 'Please introduce a positive number';

  constructor() {}

  ngOnInit(): void {}

  convert(e) {
    e.preventDefault();
    this.conversionResult =
      Math.round(
        (this.conversionInput * this.exchangeRate + Number.EPSILON) * 100
      ) / 100;
  }

  reset() {
    this.conversionInput = 0;
    this.conversionResult = 0;
  }

  swap() {
    let baseCurrency = this.currentBaseCurrency;
    let rate = this.exchangeRate;
    this.currentBaseCurrency = this.currentPairCurrency;
    this.currentPairCurrency = baseCurrency;
    this.conversionInput = this.conversionResult;
    this.exchangeRate = 1 / rate;
  }
}
