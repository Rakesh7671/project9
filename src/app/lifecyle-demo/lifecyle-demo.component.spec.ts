import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleDemoComponent } from './lifecyle-demo.component';

describe('LifecyleDemoComponent', () => {
  let component: LifecyleDemoComponent;
  let fixture: ComponentFixture<LifecyleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyleDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
