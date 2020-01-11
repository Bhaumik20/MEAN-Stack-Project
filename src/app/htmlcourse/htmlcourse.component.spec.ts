import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcourseComponent } from './htmlcourse.component';

describe('HtmlcourseComponent', () => {
  let component: HtmlcourseComponent;
  let fixture: ComponentFixture<HtmlcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
