import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorupdateComponent } from './authorupdate.component';

describe('AuthorupdateComponent', () => {
  let component: AuthorupdateComponent;
  let fixture: ComponentFixture<AuthorupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
