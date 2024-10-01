import {Config} from "../menus/config";

export function patchSpells() {
    if(Game.Objects["Wizard tower"].minigameLoaded) {
        _patchSpells();
        
        return;
    };

    Game.Objects["Wizard tower"] = new Proxy(Game.Objects["Wizard tower"], {
        set(target, property, value) {
            target[property] = value;

            if(property === "minigameLoaded" && value === true) {
                setTimeout(() => {
                    _patchSpells();
                }, 1000)
            }

            return true;
        }
    })
}

function _patchSpells() {
    console.log("Patching Grimoire")

    const originalFailChance: (spell: string) => boolean = Game.Objects["Wizard tower"].minigame.getFailChance;

    Game.Objects["Wizard tower"].minigame.getFailChance = (spell: string) => {
        console.log("l")

        if(Config.getConfig().noBackfire) {
            return 0;
        } else {
            return originalFailChance(spell);
        }
    }
}
