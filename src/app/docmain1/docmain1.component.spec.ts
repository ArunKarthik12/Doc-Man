import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docmain1Component } from './docmain1.component';

describe('Docmain1Component', () => {
  let component: Docmain1Component;
  let fixture: ComponentFixture<Docmain1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Docmain1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Docmain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
