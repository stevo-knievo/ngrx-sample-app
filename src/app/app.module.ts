import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ListComponent} from "./heroes/list/list.component";
import {DetailComponent} from "./heroes/detail/detail.component";
import {HeroesModule} from "./heroes/heroes.module";

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroesModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
