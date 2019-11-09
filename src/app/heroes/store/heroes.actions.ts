import {createAction, props} from "@ngrx/store";
import {Hero} from "../hero.model";

export const loadAllHeroes = createAction(
  "[Heroes Resolver] Load all Heroes"
);

export const allHeroesLoaded = createAction(
  "[Load Heroes Effect] All Heroes Loaded",
  props<{ heroes: Hero[] }>()
);

export const loadHero = createAction(
  "[Hero Resolver] Load Hero",
  props<{ heroId: number }>()
);

export const heroLoaded = createAction(
  "[Hero Resolver] Hero Loaded",
  props<{ hero: Hero }>()
);
