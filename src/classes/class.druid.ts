import { Character } from "./class.character";

export class Druid extends Character {

    constructor(){
        super();
    }


    //Having issues with mixin.. my classes are not getting the properties, so I thought I could enter them here
    //But it did not help my problem.

    // hasBearForm?:boolean;
    // isRaceForm?:boolean;
    // isBearForm?:boolean;
    // hasWolfForm?:boolean;
    // isWolfForm?:boolean;

    // transformToBear?():void{
    //     this.isRaceForm = false;
    //     this.isBearForm = true;
    // }
    // transformToWolf?():void{
    //     this.isRaceForm = false;
    //     this.isWolfForm = true;
    // }
    // transformRace():void{
    //     this.isRaceForm = true;
    //     this.isBearForm = false
    // }

}