import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPIcsComponent } from './cat-pics.component';

describe('CatPIcsComponent', () => {
  let component: CatPIcsComponent;
  let fixture: ComponentFixture<CatPIcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatPIcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPIcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
