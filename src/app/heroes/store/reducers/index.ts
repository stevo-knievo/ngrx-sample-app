import {EntityState} from "@ngrx/entity";
import {Hero} from "../../hero.model";

export interface HeroesState extends EntityState<Hero> {
  allHeroesLoaded: boolean;
}
