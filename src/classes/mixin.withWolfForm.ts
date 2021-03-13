import { Constructor } from '../classes/type.constructor';

export function withWolfForm<Parent extends Constructor>( MixOn:Parent ){

    return class extends MixOn{

        //All of the added properties that Wolf Form Adds
        hasWolfForm = true;
        isRaceForm = true;
        isWolfForm = false;

        transformToWolf():void{
            this.isRaceForm = false;
            this.isWolfForm = true;
        }
        transformRace():void{
            this.isRaceForm = true;
            this.isWolfForm = false;
        }
    }

}