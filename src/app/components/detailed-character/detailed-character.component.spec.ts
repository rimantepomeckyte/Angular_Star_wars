import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCharacterComponent } from './detailed-character.component';

describe('DetailedCharacterComponent', () => {
  let component: DetailedCharacterComponent;
  let fixture: ComponentFixture<DetailedCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
