import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { ClassicComponent } from './classic.component';
import { BreakpointService } from 'src/app/core/services/breakpoint.service';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ClassicComponent],
  imports: [
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CoreModule,
    LayoutModule,
  ],
  providers: [BreakpointService],
  exports: [ClassicComponent],
})
export class ClassicModule {}
