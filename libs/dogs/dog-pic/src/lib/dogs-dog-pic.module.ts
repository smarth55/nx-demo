import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedButtonModule } from '@nx-demo/shared/button';
import { SharedDogServiceModule } from '@nx-demo/shared/dog-service';

import { DogPicComponent } from './dog-pic/dog-pic.component';

@NgModule({
  imports: [
    CommonModule,
    SharedButtonModule,
    SharedDogServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: DogPicComponent
      }
    ]),
  ],
  declarations: [
    DogPicComponent
  ],
})
export class DogsDogPicModule {}
