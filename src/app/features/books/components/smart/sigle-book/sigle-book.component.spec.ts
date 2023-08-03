import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleBookComponent } from './sigle-book.component';

describe('SigleBookComponent', () => {
  let component: SigleBookComponent;
  let fixture: ComponentFixture<SigleBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigleBookComponent]
    });
    fixture = TestBed.createComponent(SigleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
