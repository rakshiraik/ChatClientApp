import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRegisterComponent } from './room-register.component';

describe('RoomRegisterComponent', () => {
  let component: RoomRegisterComponent;
  let fixture: ComponentFixture<RoomRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
