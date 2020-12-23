import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [ MatButtonModule ],
  exports: [ MatButtonModule ]
})
export class MaterialModule { }
