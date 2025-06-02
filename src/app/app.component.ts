import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeadlineCountdownComponent } from './deadline-countdown/deadline-countdown.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeadlineCountdownComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deadline-ng-assignment';
}
