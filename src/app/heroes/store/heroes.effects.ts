import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap, map, tap} from "rxjs/operators";
import {HeroesActions} from "./action-types";
import {HeroesService} from "../heroes.service";
import {allHeroesLoaded, heroLoaded} from "./heroes.actions";

// https://ngrx.io/guide/effects/lifecycle#oniniteffects
@Injectable()
export class HeroesEffects {
  loadRace$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(HeroesActions.loadHero),
        concatMap(action => this.service.get(action.heroId)),
        map(hero => heroLoaded({hero}))
      )
  );

  loadAllHeroes$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(HeroesActions.loadAllHeroes),
        concatMap(action => this.service.getAllHeroes()),
        map(heroes => allHeroesLoaded({heroes}))
      )
  );

  constructor(private actions$: Actions, private service: HeroesService) {
  }
}
