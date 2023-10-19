import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorShootingComponent } from './meteor-shooting.component';

describe('MeteorShootingComponent', () => {
  let component: MeteorShootingComponent;
  let fixture: ComponentFixture<MeteorShootingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteorShootingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteorShootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
