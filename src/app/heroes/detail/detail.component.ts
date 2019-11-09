import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/reducers";
import {getSelectedHero} from "../store/selectors/heroes.selectors";
import {Hero} from "../hero.model";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit, OnDestroy {
    public hero$: Observable<Hero>;

    constructor(private store: Store<AppState>) {
    }

    public ngOnInit() {
      this.hero$ = this.store.pipe(select(getSelectedHero));
    }

    public ngOnDestroy(): void {
        // TODO: Do I need to do something here? unsubscribe?
    }
}
