import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormitemComponent } from './formitem.component';

describe('FormitemComponent', () => {
  let component: FormitemComponent;
  let fixture: ComponentFixture<FormitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
