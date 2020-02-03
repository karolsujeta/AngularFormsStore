import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsStoreComponent } from './forms-store.component';

describe('FormsStoreComponent', () => {
  let component: FormsStoreComponent;
  let fixture: ComponentFixture<FormsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
