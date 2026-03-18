import type { Hero } from "./hero.interface";

export interface HeroesResponse {
    totalHeroes:   number;
    pages:number;
    heroes: Hero[];
}