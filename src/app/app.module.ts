import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosMerchaComponent } from './productos-mercha/productos-mercha.component';
import { ProductoMerchaComponent } from './producto-mercha/producto-mercha.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosMerchaComponent,
    ProductoMerchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
