import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResetpwdComponent } from './admin-resetpwd.component';

describe('AdminResetpwdComponent', () => {
  let component: AdminResetpwdComponent;
  let fixture: ComponentFixture<AdminResetpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminResetpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
