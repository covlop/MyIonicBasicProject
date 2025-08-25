import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SublugarPage } from './sublugar.page';

describe('SublugarPage', () => {
  let component: SublugarPage;
  let fixture: ComponentFixture<SublugarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SublugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
