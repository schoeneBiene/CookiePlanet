type CookieClickerMod = {
    init: () => void;
    save: () => string;
    load: (data: string) => void;
}

type game = {
    registerMod: (id: string, mod: CookieClickerMod) => void;
} & { [key: string]: any; }

declare global {
    var Game: game;
}

export { CookieClickerMod }
