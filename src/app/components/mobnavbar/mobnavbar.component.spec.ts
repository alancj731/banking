import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobnavbarComponent } from './mobnavbar.component';

describe('MobnavbarComponent', () => {
  let component: MobnavbarComponent;
  let fixture: ComponentFixture<MobnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobnavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
