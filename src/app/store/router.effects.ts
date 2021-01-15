import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap, map, tap} from "rxjs/operators";
import {ROUTER_NAVIGATED} from "@ngrx/router-store";

// https://ngrx.io/guide/effects/lifecycle#oniniteffects
@Injectable()
export class HeroesEffects {
  loadRace$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ROUTER_NAVIGATED)
      )
  );

  constructor(private actions$: Actions) {
  }
}
