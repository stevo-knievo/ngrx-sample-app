import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {HeroesResolver} from "./heroes-resolver";
import {HeroResolver} from "./hero-resolver";

const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        resolve: {
            heroes: HeroesResolver
        }
    },
    {
        path: "hero/:heroId",
        component: DetailComponent,
        resolve: {
            hero: HeroResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {
}
