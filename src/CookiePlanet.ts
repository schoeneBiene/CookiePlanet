import {CookieClickerMod} from "./globals";
import {Config} from "./menus/config";
import patchUpdateMenu from "./menus/patchUpdateMenu";
import {patchSpells} from "./patches/patchSpells";
import {patchStockMarket} from "./patches/patchStockMarket";

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
        patchStockMarket();
    },

    save: function() {
        return "";
    },

    load: function(data) {}
} satisfies CookieClickerMod;

export default CookiePlanet;
