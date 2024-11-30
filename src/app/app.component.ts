import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleDemoComponent } from './lifecyle-demo/lifecyle-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LifecycleDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'experiment9';
}
