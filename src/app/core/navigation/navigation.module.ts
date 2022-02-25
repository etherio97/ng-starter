import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavigationService } from './navigation.service';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [NavigationService],
  exports: [NavigationComponent],
})
export class NavigationModule {}
