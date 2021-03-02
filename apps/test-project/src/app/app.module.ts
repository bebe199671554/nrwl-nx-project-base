import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedMaterialModule } from '@face-mask/ui';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
