import {ModuleWithProviders, NgModule} from "@angular/core";
import {HeroesRoutingModule} from "./heroes-routing.module";
import {HeroesResolver} from "./heroes-resolver";
import {HeroesService} from "./heroes.service";
import {HeroResolver} from "./hero-resolver";

@NgModule({
    imports: [
        HeroesRoutingModule
    ],
    declarations: [],
    exports: []
})
export class HeroesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HeroesModule,
            providers: [HeroesService, HeroesResolver, HeroResolver]
        };
    }
}
