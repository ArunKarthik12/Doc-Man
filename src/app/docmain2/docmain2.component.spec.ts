import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docmain2Component } from './docmain2.component';

describe('Docmain2Component', () => {
  let component: Docmain2Component;
  let fixture: ComponentFixture<Docmain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Docmain2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Docmain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
