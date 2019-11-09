import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Hero} from "../hero.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/reducers";
import {selectAllHeroes} from "../store/selectors/heroes.selectors";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  public heroes$: Observable<Hero[]>;

  constructor(private store: Store<AppState>) {
  }

  public ngOnInit() {
    this.heroes$ = this.store.pipe(select(selectAllHeroes));
  }
}
