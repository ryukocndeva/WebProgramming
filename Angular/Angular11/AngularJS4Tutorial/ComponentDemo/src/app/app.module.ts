import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { EfgComponent } from './abc/efg/efg.component';
import { JklComponent } from './jkl.component';
import { HelpComponent } from './help/help.component';
import { GhiComponent } from './ghi/ghi.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    EfgComponent,
    JklComponent,
    HelpComponent,
    GhiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
