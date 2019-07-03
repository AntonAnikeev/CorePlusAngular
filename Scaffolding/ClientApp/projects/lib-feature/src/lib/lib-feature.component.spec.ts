import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFeatureComponent } from './lib-feature.component';

describe('LibFeatureComponent', () => {
  let component: LibFeatureComponent;
  let fixture: ComponentFixture<LibFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
