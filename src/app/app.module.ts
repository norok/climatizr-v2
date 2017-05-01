import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/structural/background/background.component';
import { HeaderComponent } from './components/structural/header/header.component';
import { FooterComponent } from './components/structural/footer/footer.component';
import { CitySelectorComponent } from './components/functional/city-selector/city-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    CitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
