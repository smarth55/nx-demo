import { Component, ViewEncapsulation } from '@angular/core';

import { SharedCatService } from '@nx-demo/shared/services/cat-service/shared-cat.service';
import { PrivateCatService } from '@nx-demo/shared/services/cat-service/private-cat.service';

@Component({
  selector: 'nx-demo-cat-pics',
  templateUrl: './cat-pics.component.html',
  styleUrls: ['./cat-pics.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CatPicsComponent {
  picUrl = '';

  constructor(
    private cats: SharedCatService,
    private privateCat: PrivateCatService
  ) {
    this.privateCat.call();
  }

  getCatPic() {
    this.cats.getRandomCat()
      .subscribe(res => {
        this.picUrl = res.url;
      });
  }
}
