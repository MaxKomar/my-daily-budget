import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasshboardComponent } from './dasshboard.component';

describe('DasshboardComponent', () => {
  let component: DasshboardComponent;
  let fixture: ComponentFixture<DasshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
