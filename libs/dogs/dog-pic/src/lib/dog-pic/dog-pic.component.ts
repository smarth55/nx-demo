import { Component, ViewEncapsulation } from '@angular/core';

import { SharedDogService } from '@nx-demo/shared/services/dog-service/shared-dog.service';

@Component({
  selector: 'nx-demo-dog-pic',
  templateUrl: './dog-pic.component.html',
  styleUrls: ['./dog-pic.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DogPicComponent {
  picUrl = '';

  constructor(private dogs: SharedDogService) { }

  getDogPic() {
    this.dogs.getRandomDog()
      .subscribe(res => {
        this.picUrl = res.message;
      })
  }
}
