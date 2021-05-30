import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationModifyComponent } from './administration-modify.component';

describe('AdministrationModifyComponent', () => {
  let component: AdministrationModifyComponent;
  let fixture: ComponentFixture<AdministrationModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
