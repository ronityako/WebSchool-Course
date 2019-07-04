import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankIconComponent } from './bank-icon.component';

describe('BankIconComponent', () => {
  let component: BankIconComponent;
  let fixture: ComponentFixture<BankIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
