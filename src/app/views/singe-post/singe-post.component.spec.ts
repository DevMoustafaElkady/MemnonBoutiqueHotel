import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingePostComponent } from './singe-post.component';

describe('SingePostComponent', () => {
  let component: SingePostComponent;
  let fixture: ComponentFixture<SingePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
