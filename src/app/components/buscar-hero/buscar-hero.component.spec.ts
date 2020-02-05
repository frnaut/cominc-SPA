import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHeroComponent } from './buscar-hero.component';

describe('BuscarHeroComponent', () => {
  let component: BuscarHeroComponent;
  let fixture: ComponentFixture<BuscarHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
