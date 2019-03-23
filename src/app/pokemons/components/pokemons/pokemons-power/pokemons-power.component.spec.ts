import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsPowerComponent } from './pokemons-power.component';

describe('PokemonsPowerComponent', () => {
  let component: PokemonsPowerComponent;
  let fixture: ComponentFixture<PokemonsPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
