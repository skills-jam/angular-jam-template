import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/app-routing.module';
import { defaultDataServiceConfig } from './core/default-data-service.config';
import { entityConfig } from './core/entity-metadata';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
