import { Constructor } from '../classes/type.constructor';

export function withBearForm<Parent extends Constructor>( MixOn:Parent ){

    return class extends MixOn{

        //All of the added properties that Bear Form Adds
        hasBearForm = true;
        isRaceForm = true;
        isBearForm = false;

        transformToBear():void{
            this.isRaceForm = false;
            this.isBearForm = true;
        }

        transformRace():void{
            this.isRaceForm = true;
            this.isBearForm = false
        }
        
    }

}