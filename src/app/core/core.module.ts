import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { NavigationModule } from './navigation/navigation.module';
import { NavigationService } from './navigation/navigation.service';
import { AuthService } from './services/auth.service';
import { BreakpointService } from './services/breakpoint.service';
import { FirebaseService } from './services/firebase.service';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [NavigationModule, IconsModule, UserModule],
  providers: [
    BreakpointService,
    NavigationService,
    AuthService,
    FirebaseService,
  ],
  exports: [NavigationModule, UserModule],
})
export class CoreModule {}
