type CookieClickerMod = {
    init: () => void;
    save: () => string;
    load: (data: string) => void;
}

type game = {
    registerMod: (id: string, mod: CookieClickerMod) => void;
    UpdateMenu: () => void;
} & { [key: string]: any; }

declare global {
    var Game: game;
    var l: (what: string) => HTMLElement;
    var PlaySound: (sound: string) => void;
}

export { CookieClickerMod }
