import { inConfig } from "./config";

export default function patchUpdateMenu() {
    const originalUpdateMenu = Game.UpdateMenu;

    Game.UpdateMenu = () => {
        originalUpdateMenu();

        if(Game.onMenu === "prefs") {
            inConfig();
        }
    }
}
