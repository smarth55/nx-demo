import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@nx-demo/core/home/core-home.module').then(m => m.CoreHomeModule)
      },
      {
        path: 'cats',
        loadChildren: () => import('@nx-demo/cats/cat-pic').then(m => m.CatsCatPicModule)
      },
      {
        path: 'dogs',
        loadChildren: () => import('@nx-demo/dogs/dog-pic').then(m => m.DogsDogPicModule)
      }
    ])
  ],
  declarations: [
    ShellComponent
  ]
})
export class CoreShellModule {}
