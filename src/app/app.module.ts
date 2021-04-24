import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosMerchaComponent } from './productos-mercha/productos-mercha.component';
import { ProductoMerchaComponent } from './producto-mercha/producto-mercha.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductosMerchaComponent,
    ProductoMerchaComponent,
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
