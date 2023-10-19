import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterSpaceComponent } from './outer-space.component';

describe('OuterSpaceComponent', () => {
  let component: OuterSpaceComponent;
  let fixture: ComponentFixture<OuterSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
