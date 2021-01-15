import {ModuleWithProviders, NgModule} from "@angular/core";
import {HeroesRoutingModule} from "./heroes-routing.module";
import {HeroesResolver} from "./heroes-resolver";
import {HeroesService} from "./heroes.service";
import {HeroResolver} from "./hero-resolver";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HeroesEffects} from "./store/heroes.effects";
import {heroesReducer} from "./store/reducers/heroes.reducers";

@NgModule({
    imports: [
        HeroesRoutingModule,
        StoreModule.forFeature("heroes", heroesReducer),
        EffectsModule.forFeature([HeroesEffects])
    ],
    declarations: [],
    exports: []
})
export class HeroesModule {
    static forRoot(): ModuleWithProviders<HeroesModule> {
        return {
            ngModule: HeroesModule,
            providers: [HeroesService, HeroesResolver, HeroResolver]
        };
    }
}
