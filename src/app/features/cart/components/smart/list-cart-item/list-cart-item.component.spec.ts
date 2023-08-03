import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCartItemComponent } from './list-cart-item.component';

describe('ListCartItemComponent', () => {
  let component: ListCartItemComponent;
  let fixture: ComponentFixture<ListCartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCartItemComponent]
    });
    fixture = TestBed.createComponent(ListCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
