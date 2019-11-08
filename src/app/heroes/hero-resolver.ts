import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import {HeroesService} from "./heroes.service";

@Injectable()
export class HeroResolver implements Resolve<any> {
    constructor(private service: HeroesService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const heroId = +route.paramMap.get("heroId");
        return this.service.get(heroId);
    }
}
