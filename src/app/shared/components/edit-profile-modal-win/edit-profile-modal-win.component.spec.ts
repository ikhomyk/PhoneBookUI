import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileModalWinComponent } from './edit-profile-modal-win.component';

describe('EditProfileModalWinComponent', () => {
  let component: EditProfileModalWinComponent;
  let fixture: ComponentFixture<EditProfileModalWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileModalWinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileModalWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
