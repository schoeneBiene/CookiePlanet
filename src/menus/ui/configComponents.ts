import {Config} from "../config";

export type Option = {
    type: "toggle";
    description?: string;
    default: any;
}

function camelToSpaces(text: string) {
    const words = text.match(/[A-Za-z][a-z]*/g) || [];
    
    console.log(words);

    return words.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
} 

function constructSwitchComponent(name: string, option: Option) {
    let value: boolean = Config.getConfig()[name];

    const container = document.createElement("div");

    const button = document.createElement("a");
    button.className = String.prototype.concat("smallFancyButton prefButton option", value ? "" : " off");
    button.textContent = String.prototype.concat(camelToSpaces(name), value ? " ON" : " OFF");

    button.addEventListener("click", () => {
        PlaySound('snd/tick.mp3');

        Config.setConfigItem(name, !value);
        Config.saveConfig();

        Game.UpdateMenu();
    })

    container.append(button);

    if(option.description) {
        const label = document.createElement("label");
        
        label.textContent = option.description;

        container.append(label);
    }

    return container
}

export function constructComponent(name: string, option: Option) {
    if(option.type === "toggle") {
        return constructSwitchComponent(name, option);
    } else {
        return document.createElement("div")
    }
}
