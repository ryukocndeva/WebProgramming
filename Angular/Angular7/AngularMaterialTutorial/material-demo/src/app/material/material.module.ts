import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule, 
  MatButtonToggleModule
];

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
