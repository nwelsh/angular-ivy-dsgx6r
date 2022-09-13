import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndorsementsGivenComponent } from './endorsements-given.component';

describe('EndorsementsGivenComponent', () => {
  let component: EndorsementsGivenComponent;
  let fixture: ComponentFixture<EndorsementsGivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndorsementsGivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndorsementsGivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
