import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumContainerComponent } from './custum-container.component';

describe('CustumContainerComponent', () => {
  let component: CustumContainerComponent;
  let fixture: ComponentFixture<CustumContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
