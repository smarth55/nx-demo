import { Component, ViewEncapsulation } from '@angular/core';

import { SharedCatService } from '@nx-demo/shared/cat-service';

// this is not exported form the lib
// import { PrivateCatService } from '@nx-demo/shared/cat-service';

@Component({
  selector: 'nx-demo-cat-pics',
  templateUrl: './cat-pics.component.html',
  styleUrls: ['./cat-pics.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CatPicsComponent {
  picUrl = '';

  constructor(private cats: SharedCatService) { }

  getCatPic() {
    this.cats.getRandomCat()
      .subscribe(res => {
        this.picUrl = res.url;
      });
  }
}
