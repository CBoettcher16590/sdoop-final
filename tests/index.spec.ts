import { expect } from "chai";
import "mocha";
import { CharacterRace } from "../src";
import { Druid } from "../src/classes/class.druid";
import {Wizard} from '../src/classes/class.wizard'

describe("Test Wizard Class", () => {
    it("Should be able to create a new Wizard", () => {
        const wizard = new Wizard();
        // if a wizard is created its level will be 0
        expect(wizard._level).to.equal(0);
    });
    it("Should be able to get the level of a charcter", () => {
        const wizard = new Wizard();
        const wizardLevel = wizard.getLevel();
        // if a wizard is created its level will be 0
        expect(wizardLevel).to.equal(0);
    });
});

describe("Test Druid Class", () => {
    it("Should be able to create a new Druid", () => {
        const druid = new Druid();
        // if a druid is created its level will be 0
        expect(druid._level).to.equal(0);
    });
    it("Should be able to Change its Name", () => {
        const druid = new Druid();
        druid._name = "dean";
        expect(druid._name).to.equal("dean");
    });
    it("Should be able to Change its Race", () => {
        const druid = new Druid();
        druid._class = CharacterRace.nightElf;
        expect(druid._class).to.equal("Night Elf");
    });


});

