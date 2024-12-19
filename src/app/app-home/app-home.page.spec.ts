import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHomePage } from './app-home.page';

describe('AppHomePage', () => {
  let component: AppHomePage;
  let fixture: ComponentFixture<AppHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
