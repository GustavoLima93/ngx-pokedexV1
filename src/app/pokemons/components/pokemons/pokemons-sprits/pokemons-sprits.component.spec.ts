import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsSpritsComponent } from './pokemons-sprits.component';

describe('PokemonsSpritsComponent', () => {
  let component: PokemonsSpritsComponent;
  let fixture: ComponentFixture<PokemonsSpritsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsSpritsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsSpritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
