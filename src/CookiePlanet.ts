import {CookieClickerMod} from "./globals";
import {Config} from "./menus/config";
import patchUpdateMenu from "./menus/patchUpdateMenu";
import {patchSpells} from "./patches/patchSpells";

const CookiePlanet = {
    init: function() {
        document.addEventListener("keydown", (e) => {
            if(e.key === "F8") {
                debugger;
            }
        })

        Config.initConfig();

        patchUpdateMenu();
        patchSpells();
    },

    save: function() {
        return "";
    },

    load: function(data) {}
} satisfies CookieClickerMod;

export default CookiePlanet;
