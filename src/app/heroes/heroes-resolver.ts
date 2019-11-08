import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HeroesService} from "./heroes.service";

@Injectable()
export class HeroesResolver implements Resolve<any> {
    loading = false;

    constructor(private service: HeroesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.service.getAllHeroes();
    }
}
