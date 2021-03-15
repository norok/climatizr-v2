import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BackgroundComponent } from './background.component';

describe('BackgroundComponent', () => {
  let component: BackgroundComponent;
  let fixture: ComponentFixture<BackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ BackgroundComponent ] });
    fixture = TestBed.createComponent(BackgroundComponent);
    component = fixture.componentInstance;

    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  })

  it('should contain the "night" css class if after 6pm and before 5pm', () => {
    jasmine.clock().mockDate(new Date('2021-03-15T21:00:00.000Z'));
    fixture.detectChanges();

    const bgElement: HTMLElement = fixture.nativeElement;
    const el = bgElement.querySelector('div');
    expect(el.classList).toContain('night');
  });

  it('should contain the "day" css class if before 6pm and after 5pm', () => {
    jasmine.clock().mockDate(new Date('2021-03-14T13:00:00.000Z'));
    fixture.detectChanges();

    const bgElement: HTMLElement = fixture.nativeElement;
    const el = bgElement.querySelector('div');
    expect(el.classList).toContain('day');
  });
});
