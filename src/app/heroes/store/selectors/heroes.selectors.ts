import {createFeatureSelector, createSelector} from "@ngrx/store";
import {HeroesState} from "../reducers";
import {getRouteState} from "../../../store/selectors/router.selectors";
import {adapter} from "../reducers/heroes.reducers";

export const selectHeroesState = createFeatureSelector<HeroesState>("heroes");

export const {selectAll} = adapter.getSelectors();

export const selectAllHeroes = createSelector(
  selectHeroesState,
  selectAll,
);

export const areHeroesLoaded = createSelector(
  selectHeroesState,
  state => state.allHeroesLoaded
);

export const isHeroLoaded = createSelector(
  selectHeroesState,
  (state, heroId) => {
    const race = state.entities[heroId];
    return (race);
  }
);

export const getRouteHeroId = createSelector(
  getRouteState,
  (router) => {
    console.log("router", router);
    return router.state.params.heroId;
  }
);

export const getSelectedHero = createSelector(
  selectHeroesState,
  getRouteHeroId,
  (state, heroId) => {
    const hero = state.entities[heroId];
    // FixMe: simplifies the problem... hero is undefined if you navigation for /hero/:heroId to / and following line will throw an error.
    console.log("getSelectedHero", heroId, hero, hero.id, hero.name);
    return hero;
  }
);

export const getSelectedHero1 = createSelector(
  selectHeroesState,
  getRouteState,
  (state, router) => {
    const hero = state.entities[router.state.params.heroId];
    console.log("getSelectedHero", hero, hero.id, hero.name);
    return hero;
  }
);
