import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresigninComponent } from './presignin.component';

describe('PresigninComponent', () => {
  let component: PresigninComponent;
  let fixture: ComponentFixture<PresigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
