import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedCatService } from './shared-cat.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SharedCatService]
})
export class SharedCatServiceModule {}
