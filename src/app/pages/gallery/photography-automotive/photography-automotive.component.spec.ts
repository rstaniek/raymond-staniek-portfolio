import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyAutomotiveComponent } from './photography-automotive.component';

describe('PhotographyAutomotiveComponent', () => {
  let component: PhotographyAutomotiveComponent;
  let fixture: ComponentFixture<PhotographyAutomotiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyAutomotiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyAutomotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
