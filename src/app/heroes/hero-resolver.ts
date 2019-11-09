// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
// import { Observable } from "rxjs";
// import {HeroesService} from "./heroes.service";
//
// @Injectable()
// export class HeroResolver implements Resolve<any> {
//     constructor(private service: HeroesService) {}
//
//     public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//         const heroId = +route.paramMap.get("heroId");
//         return this.service.get(heroId);
//     }
// }



import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {filter, finalize, first, tap} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/reducers";
import {isHeroLoaded} from "./store/selectors/heroes.selectors";
import {loadHero} from "./store/heroes.actions";


@Injectable()
export class HeroResolver implements Resolve<any> {
  private loading = false;

  constructor(private store: Store<AppState>) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(isHeroLoaded, route.paramMap.get("heroId")),
      tap(heroLoaded => {
        if (!this.loading && !heroLoaded) {
          this.loading = true;
          this.store.dispatch(loadHero({heroId: +route.paramMap.get("heroId")}));
        }
      }),
      filter(heroLoaded => heroLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
