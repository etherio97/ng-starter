import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routerOptions, routes } from './app.routing';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { initializeFirebase } from './firebase.init';
import { AuthService } from './core/services/auth.service';
import { CoreModule } from './core/core.module';
import { FirebaseService } from './core/services/firebase.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routerOptions),
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFirebase,
      multi: true,
      deps: [FirebaseService],
    },
  ],
  bootstrap: [AppComponent],
  exports: [HttpClientModule],
})
export class AppModule {}
