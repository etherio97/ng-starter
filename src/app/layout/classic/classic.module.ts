import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationModule } from '../../core/navigation/navigation.module';
import { IconsModule } from 'src/app/core/icons/icons.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ClassicComponent } from './classic.component';
import { BreakpointService } from 'src/app/core/services/breakpoint.service';
import { UserModule } from 'src/app/core/user/user.module';

@NgModule({
  declarations: [ClassicComponent],
  imports: [
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    UserModule,
    NavigationModule,
    IconsModule,
    LayoutModule,
  ],
  providers: [BreakpointService],
  exports: [ClassicComponent],
})
export class ClassicModule {}
