export function patchStockMarket() {
    if(Game.Objects.Bank.minigameLoaded) {
        _patchStockMarket();
        
        return;
    };

    Game.Objects.Bank = new Proxy(Game.Objects.Bank, {
        set(target, property, value) {
            target[property] = value;

            if(property === "minigameLoaded" && value === true) {
                setTimeout(() => {
                    _patchStockMarket();
                }, 1000)
            }

            return true;
        }
    })
}

function _patchStockMarket() {
    const button = document.createElement("div");
    button.className = "bankButton bankButtonBuy"
    button.textContent = "Tick";

    button.addEventListener("click", () => {
        Game.Objects.Bank.minigame.tickT = Game.Objects.Bank.minigame.secondsPerTick * 30;
    })

    l("bankBrokers").parentNode?.appendChild(button);
}

