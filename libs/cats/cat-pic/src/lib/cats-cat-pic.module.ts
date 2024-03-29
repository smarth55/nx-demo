import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedButtonModule } from '@nx-demo/shared/button';
import { SharedCatServiceModule } from '@nx-demo/shared/cat-service';

import { CatPicsComponent } from './cat-pics/cat-pics.component';

@NgModule({
  imports: [
    CommonModule,
    SharedButtonModule,
    SharedCatServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatPicsComponent
      }
    ]),
  ],
  declarations: [
    CatPicsComponent
  ],
})
export class CatsCatPicModule {}
