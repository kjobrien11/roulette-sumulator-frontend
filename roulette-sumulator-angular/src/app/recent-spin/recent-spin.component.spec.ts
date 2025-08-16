import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSpinComponent } from './recent-spin.component';

describe('RecentSpinComponent', () => {
  let component: RecentSpinComponent;
  let fixture: ComponentFixture<RecentSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSpinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
