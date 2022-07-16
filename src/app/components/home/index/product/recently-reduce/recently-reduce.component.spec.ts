import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyReduceComponent } from './recently-reduce.component';

describe('RecentlyReduceComponent', () => {
  let component: RecentlyReduceComponent;
  let fixture: ComponentFixture<RecentlyReduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyReduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
