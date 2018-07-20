import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfTaskComponent } from './type-of-task.component';

describe('TypeOfTaskComponent', () => {
  let component: TypeOfTaskComponent;
  let fixture: ComponentFixture<TypeOfTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
