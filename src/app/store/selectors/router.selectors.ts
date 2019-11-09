import {createFeatureSelector} from "@ngrx/store";
import {RouterStateUrl} from "../reducers";
import {RouterReducerState} from "@ngrx/router-store";

export const getRouteState = createFeatureSelector<RouterReducerState<RouterStateUrl>>("router");
