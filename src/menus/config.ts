import {Option, constructComponent} from "./ui/configComponents";
import heading from "./ui/heading";

export class Config {
    private static config: { [key: string]: any } = {};

    private static defaults() {
        const conf: { [key: string]: any } = {};

        for(const [key, value] of Object.entries(configOptions)) {
            conf[key] = value.default;
        }

        console.log(conf);

        return conf;
    }

    public static initConfig() {
        let conf = localStorage.getItem("CookiePlanet");

        if(!conf) {
            localStorage.setItem("CookiePlanet", JSON.stringify(this.defaults()));
        }

        conf = localStorage.getItem("CookiePlanet");

        if(!conf) {
            throw new Error("Failed to load config data!");
        }

        Config.config = JSON.parse(conf);
    }

    public static setConfigItem(item: string, newValue: any) {
        Config.config[item] = newValue;
    }

    public static saveConfig() {
        localStorage.setItem("CookiePlanet", JSON.stringify(Config.config));
    }
    
    public static getConfig() {
        return Config.config;
    }
}

export const configOptions = {
    noBackfire: {
        type: "toggle",
        description: "When on, makes spells not backfire",
        default: false
    }
} satisfies {
    [key: string]: Option;
};

export function inConfig() {
    const block = document.createElement("div");
    block.className = "block";
    block.setAttribute("style", "padding:0px;margin:8px 4px;");
    
    const subsection = document.createElement("div");
    subsection.className = "subsection";
    subsection.setAttribute("style", "padding:0px;")

    subsection.appendChild(heading("CookiePlanet"))

    const listing = document.createElement("div");
    listing.className = "listing";

    for (const [key, value] of Object.entries(configOptions)) {
        listing.append(constructComponent(key, value));
    }

    subsection.appendChild(listing);
    block.append(subsection);
    l("menu").childNodes[4].before(block);
}
