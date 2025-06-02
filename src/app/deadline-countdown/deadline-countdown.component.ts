import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, effect, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DeadlineCountdownService } from '../deadline-countdown/deadline-countdown.service'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-deadline-countdown',
  standalone: true,
  imports:[CommonModule, HttpClientModule],
  templateUrl: './deadline-countdown.component.html',
  styleUrl: './deadline-countdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeadlineCountdownComponent implements OnInit, OnDestroy {
  secondsLeft = signal<number | null>(null);
  private timerSub?: Subscription;

  constructor(private deadlineCountdownService: DeadlineCountdownService) {
    effect(() => {
      const val = this.secondsLeft();
      console.log('Seconds left updated:', val);
    });
  }

  ngOnInit(): void {
    this.populateSecondLeft()
  }

  populateSecondLeft():void{
    this.deadlineCountdownService.getSecondsLeft().subscribe(res => {
      this.secondsLeft.set(res.secondsLeft);

      this.timerSub = interval(1000).subscribe(() => {
        const current = this.secondsLeft();
        if (current !== null && current > 0) {
          this.secondsLeft.set(current - 1);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }
}
