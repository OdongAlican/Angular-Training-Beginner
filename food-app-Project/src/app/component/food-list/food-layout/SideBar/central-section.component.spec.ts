import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralSectionComponent } from './central-section.component';

describe('CentralSectionComponent', () => {
  let component: CentralSectionComponent;
  let fixture: ComponentFixture<CentralSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
