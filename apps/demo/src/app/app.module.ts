import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('@nx-demo/core/shell').then(m => m.CoreShellModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
