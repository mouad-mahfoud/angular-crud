
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import {CoreModule} from "./core/core.module";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import {SharedModule} from "./shared/shared.module";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
