import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNameItemsComponent } from './form-name-items.component';

describe('FormNameItemsComponent', () => {
  let component: FormNameItemsComponent;
  let fixture: ComponentFixture<FormNameItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNameItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNameItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
