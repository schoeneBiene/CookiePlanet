import {CookieClickerMod} from "./globals";

const CookiePlanet = {
    init: function() {
        console.log("a!")
        console.log(Game.Objects["Wizard tower"]);
        setTimeout(() => {
            if(!Game.Objects["Wizard tower"].minigameLoaded) return;
            Game.Objects["Wizard tower"].minigame.getFailChance = (_: string) => 0;
        }, 2000)
    },

    save: function() {
        return "asd";
    },

    load: function(data) {
        console.log("Loading data: " + data)
    }
} satisfies CookieClickerMod;

export default CookiePlanet;
