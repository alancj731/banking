import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalbalanceboxComponent } from './totalbalancebox.component';

describe('TotalbalanceboxComponent', () => {
  let component: TotalbalanceboxComponent;
  let fixture: ComponentFixture<TotalbalanceboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalbalanceboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalbalanceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
