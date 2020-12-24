import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule, 
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
