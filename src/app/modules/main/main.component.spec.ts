import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { LoaderComponent } from '../loader/loader.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent, LoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement the offset and call getProductsList in previousPage', () => {
    spyOn(component, 'getProductsList');

    component.offset = 12; 
    component.previousPage();

    expect(component.offset).toBe(0);
    expect(component.getProductsList).toHaveBeenCalled();
  });

  it('should not decrement offset below 0 in previousPage', () => {
    spyOn(component, 'getProductsList');

    component.offset = 0; 
    component.previousPage();

    expect(component.offset).toBe(0);
    expect(component.getProductsList).toHaveBeenCalled();
  });
});
