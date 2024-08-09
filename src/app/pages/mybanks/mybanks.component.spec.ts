import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybanksComponent } from './mybanks.component';

describe('MybanksComponent', () => {
  let component: MybanksComponent;
  let fixture: ComponentFixture<MybanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MybanksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
