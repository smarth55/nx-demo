import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedDogService } from './shared-dog.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SharedDogService]
})
export class SharedDogServiceModule {}
