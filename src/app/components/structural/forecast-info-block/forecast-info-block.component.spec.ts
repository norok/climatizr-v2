import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForecastInfoBlockComponent } from './forecast-info-block.component';

describe('ForecastInfoBlockComponent', () => {
  let component: ForecastInfoBlockComponent;
  let fixture: ComponentFixture<ForecastInfoBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastInfoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
