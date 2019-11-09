import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {routerReducer, RouterReducerState, RouterStateSerializer} from "@ngrx/router-store";
import {Params, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../environments/environment";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// https://ngrx.io/guide/router-store/selectors#router-selectors
export class CustomRouterSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: {queryParams},
    } = routerState;
    const {params} = route;

    // Only return an object including the URL, params and query params instead of the entire snapshot
    return {url, params, queryParams};
  }
}

export interface AppState {
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
