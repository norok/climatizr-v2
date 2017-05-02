import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastInfoComponent } from './forecast-info.component';

describe('ForecastInfoComponent', () => {
  let component: ForecastInfoComponent;
  let fixture: ComponentFixture<ForecastInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
