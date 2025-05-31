import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineCountdownComponent } from './deadline-countdown.component';

describe('DeadlineCountdownComponent', () => {
  let component: DeadlineCountdownComponent;
  let fixture: ComponentFixture<DeadlineCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadlineCountdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadlineCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
