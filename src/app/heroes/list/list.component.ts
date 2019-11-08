import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
    public heroes$: Observable<any[]>;
    constructor(private route: ActivatedRoute, private router: Router) { }

    public ngOnInit() {
        this.heroes$ = this.route.data.pipe(
            map(({ heroes }) => heroes)
        );
    }
}
