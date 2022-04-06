import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataContributionComponent } from './data-contribution.component';

describe('DataContributionComponent', () => {
  let component: DataContributionComponent;
  let fixture: ComponentFixture<DataContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
