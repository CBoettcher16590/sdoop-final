import { Druid } from './classes/class.druid';
import { Wizard } from './classes/class.wizard';
import { withBearForm } from './classes/mixin.withBearForm';
import { withWolfForm } from './classes/mixin.withWolfForm';

export enum CharacterRace {
    human = "Human",
    nightElf = "Night Elf",
    bloodElf = "Blood Elf",
    teifling = "Teifling"
}


// ========================== DRUID BUILDER ========================== //

class DruidBuilder {

    constructor(){
        this._instance = new this.BasicDruid();
    }
    BasicDruid = Druid;

    private _instance:Druid;

    protected get instance():Druid {
        if( !this._instance ){
            this._instance = new this.BasicDruid();
        }
        return this._instance;
    }

    getInstance(){
        return this._instance
    }

    setRace(make:CharacterRace):void{

        this._instance._class = make;
    }

    setName( name:string ):void{

        this._instance._name = name;
    }

    addBearForm():void{

        this.BasicDruid = withBearForm( this.BasicDruid )
    }
    
    addWolfForm():void{

        this.BasicDruid = withWolfForm( this.BasicDruid )
    }

    addBothForms():void{
    
        this.BasicDruid = withBearForm( withWolfForm ( this.BasicDruid ) )
    }

    getCharacter(){

        return this.instance;
    }


}




// ========================== WIZARD BUILDER ========================== //

class WizardBuilder {

    private _instance:Wizard;

    constructor(){
        this._instance = new Wizard();
    }

    protected get instance():Wizard {
        if( !this._instance ){
            this._instance = new Wizard();
        }
        return this._instance;
    }

    getInstance(){
        return this._instance
    }

    setRace(make: CharacterRace ):void{

        this._instance._class = make;

    }

    setName( name:string ):void{
        
        this._instance._name = name;

    }

    getCharacter():Wizard{
        return this.instance;
    } 

}



// ========================== WIZARD DIRECTOR ========================== //

class WizardDirector {

   constructor(public builder:typeof WizardBuilder){

   }

    makeHumanWizard(){
        const builder = new this.builder();
        builder.setRace(CharacterRace.human);
        builder.setName("Stephen");
        return builder.getInstance();
    }

}


// ========================== DRUID DIRECTOR ========================== //


class DruidDirector {
    constructor(public builder:typeof DruidBuilder){

    }

    makeNightElfBearDruid(){
        const builder = new this.builder();
        builder.setRace(CharacterRace.nightElf);
        builder.setName("Charles");
        //Mixin Doesnt add properties..?
        builder.addBearForm();

        return builder.getInstance();
    }

    makeBloodElfWolfDruid(){
        const builder = new this.builder();
        builder.setRace(CharacterRace.bloodElf);
        builder.setName("Sussan");
        builder.addWolfForm();
        return builder.getInstance();
    }

    makeTeiflingBearWolfDruid(){
        const builder = new this.builder();
        builder.setRace(CharacterRace.teifling);
        builder.setName("Ludwig");
        builder.addBearForm();
        builder.addWolfForm();
        return builder.getInstance();
    }
}


// ========================== TESTS/LOGS ========================== //


const druidDirector = new DruidDirector ( DruidBuilder );
const wizardDirector = new WizardDirector( WizardBuilder );

const wizard = wizardDirector.makeHumanWizard();

const nightElf = druidDirector.makeNightElfBearDruid();
const bloodElf = druidDirector.makeBloodElfWolfDruid();
const teifling = druidDirector.makeTeiflingBearWolfDruid()


console.log(nightElf);
console.log(bloodElf);
console.log(teifling);
console.log(wizard);


