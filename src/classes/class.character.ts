import { CharacterRace } from "..";
import { ICharacter } from "./interface.character";

export class Character implements ICharacter {

    _class: CharacterRace;
    _name: string;

    //when creating a new Character, xp and level start at 0
    _xp = 0;
    _level = 0;
  
    getLevel():number{
        return this._level;
    }

}