import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmplComponent } from './edit-empl.component';

describe('EditEmplComponent', () => {
  let component: EditEmplComponent;
  let fixture: ComponentFixture<EditEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
