import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('Welcome to the Angular Exam');
  });

  it('should have a description', () => {
    expect(component.description).toBe('This is a single-page application built with Angular.');
  });

  it('should have isActive set to true', () => {
    expect(component.isActive).toBe(true);
  });

  it('should have userCount equal to 100', () => {
    expect(component.userCount).toBe(100);
  });
});