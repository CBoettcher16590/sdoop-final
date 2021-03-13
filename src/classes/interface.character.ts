import { CharacterRace } from "..";

export interface ICharacter {
    _class:CharacterRace;
    _name:string;
    _xp:number;
    _level:number
}