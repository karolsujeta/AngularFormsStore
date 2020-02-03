import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsStoreDisplayComponent } from './forms-store-display.component';

describe('FormsStoreDisplayComponent', () => {
  let component: FormsStoreDisplayComponent;
  let fixture: ComponentFixture<FormsStoreDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsStoreDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsStoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
