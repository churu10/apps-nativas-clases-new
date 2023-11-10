import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InfoProductoPage } from './info-producto.page';

describe('InfoProductoPage', () => {
  let component: InfoProductoPage;
  let fixture: ComponentFixture<InfoProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
