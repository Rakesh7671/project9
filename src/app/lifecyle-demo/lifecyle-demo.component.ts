import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyle-demo',
  standalone: true,
  imports: [],
  templateUrl: './lifecyle-demo.component.html',
  styleUrl: './lifecyle-demo.component.css'
})
export class LifecycleDemoComponent 
  implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  
  @Input() message: string = 'Hello, World!';
  counter: number = 0;
  intervalId: any;

  constructor() {
    console.log('Constructor: Component instance created');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges: Input property changed');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
    this.startCounter();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection run');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component is being destroyed');
    clearInterval(this.intervalId);
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }
}