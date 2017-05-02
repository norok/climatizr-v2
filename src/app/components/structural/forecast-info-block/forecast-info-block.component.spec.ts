import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastInfoBlockComponent } from './forecast-info-block.component';

describe('ForecastInfoBlockComponent', () => {
  let component: ForecastInfoBlockComponent;
  let fixture: ComponentFixture<ForecastInfoBlockComponent>;

  beforeEach(async(() => {
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
