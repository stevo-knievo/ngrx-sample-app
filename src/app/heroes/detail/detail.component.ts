import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
    public hero$: Observable<any>;
    constructor(private route: ActivatedRoute, private router: Router) { }

    public ngOnInit() {
        this.hero$ = this.route.data.pipe(
            map(({ hero }) => hero)
        );
    }
}
