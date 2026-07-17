import { Component, signal } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hotelapp-frontend');
}
