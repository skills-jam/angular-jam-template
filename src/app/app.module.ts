import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
