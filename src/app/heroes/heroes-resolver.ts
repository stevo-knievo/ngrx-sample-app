// import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
// import {Injectable} from "@angular/core";
// import {Observable} from "rxjs";
// import {HeroesService} from "./heroes.service";
//
// @Injectable()
// export class HeroesResolver implements Resolve<any> {
//     loading = false;
//
//     constructor(private service: HeroesService) {
//     }
//
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//         return this.service.getAllHeroes();
//     }
// }


import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/reducers";
import {filter, finalize, first, tap} from "rxjs/operators";
import {areHeroesLoaded} from "./store/selectors/heroes.selectors";
import {loadAllHeroes} from "./store/heroes.actions";


@Injectable()
export class HeroesResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(areHeroesLoaded),
      tap(heroesLoaded => {
        if (!this.loading && !heroesLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllHeroes());
        }
      }),
      filter(heroesLoaded => heroesLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
