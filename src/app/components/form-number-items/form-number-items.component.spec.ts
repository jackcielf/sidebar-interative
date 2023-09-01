import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNumberItemsComponent } from './form-number-items.component';

describe('FormNumberItemsComponent', () => {
  let component: FormNumberItemsComponent;
  let fixture: ComponentFixture<FormNumberItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNumberItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNumberItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
