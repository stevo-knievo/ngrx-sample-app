import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class HeroesService {
    private data = [
        { id: 11, name: "Mr. Nice" },
        { id: 12, name: "Narco" },
        { id: 13, name: "Bombasto" },
        { id: 14, name: "Celeritas" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "RubberMan" },
        { id: 17, name: "Dynama" },
        { id: 18, name: "Dr IQ" },
        { id: 19, name: "Magma" },
        { id: 20, name: "Tornado" }
    ];

    constructor() {
    }

    public getAllHeroes(): Observable<any[]> {
        return of(this.data);
    }

    public get(heroId: number): Observable<any> {
        return of(this.data.filter(h => h.id === heroId)[0]);
    }
}
