import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const MAT_MODULES = [MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MatModule {}