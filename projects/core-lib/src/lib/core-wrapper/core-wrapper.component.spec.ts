import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoreWrapperComponent } from './core-wrapper.component';

describe('CoreWrapperComponent', () => {
  let component: CoreWrapperComponent;
  let fixture: ComponentFixture<CoreWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
