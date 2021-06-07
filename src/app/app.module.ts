import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';

@NgModule({
  declarations: [AppComponent, CurrencyConverterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
