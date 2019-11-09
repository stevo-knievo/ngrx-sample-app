import {createEntityAdapter} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {Update} from "@ngrx/entity/src/models";
import {Hero} from "../../hero.model";
import {HeroesActions} from "../action-types";


export const adapter = createEntityAdapter<Hero>({
});

export const initialRaceState = adapter.getInitialState({
  allHeroesLoaded: false
});

export const heroesReducer = createReducer(
  initialRaceState,

  // on(RaceActions.raceLoaded, (state, action) => {
  //   //   if (state.allRacesLoaded) {
  //   //     const update: Update<Race> = {
  //   //       id: action.race.id,
  //   //       changes: action.race
  //   //     };
  //   //     return adapter.updateOne(update, state);
  //   //   } else {
  //   //     return adapter.addOne(action.race, state);
  //   //   }
  //   // }
  // ),

  on(HeroesActions.allHeroesLoaded, (state, action) => {
    return adapter.addMany(action.heroes, {...state, allHeroesLoaded: true});
  }),
);
