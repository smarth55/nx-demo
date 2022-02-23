import { Injectable } from "@angular/core";

@Injectable()
export class PrivateCatService {
  call() {
    console.log('this is supposed to be private to the cat service.');
  }
}