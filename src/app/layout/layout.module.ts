import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ClassicModule } from './classic/classic.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ClassicModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
