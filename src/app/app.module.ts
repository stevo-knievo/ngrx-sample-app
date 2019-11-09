import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ListComponent} from "./heroes/list/list.component";
import {DetailComponent} from "./heroes/detail/detail.component";
import {HeroesModule} from "./heroes/heroes.module";
import {CustomRouterSerializer, metaReducers, reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";

const routerStateWorks = {
  state: {
    url: "/",
    params: {},
    queryParams: {}
  },
  navigationId: 0
};

const initialState = {
  router: routerStateWorks
};


@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroesModule.forRoot(),
      /* start NgRx */
      StoreModule.forRoot(reducers, {
        metaReducers,
        initialState,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability: true
        }
      }),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production
      }),
      StoreRouterConnectingModule.forRoot({
        routerState: RouterState.Minimal,
        serializer: CustomRouterSerializer
      })
      /* end NgRx */
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
