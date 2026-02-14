import { Config } from "../menus/config";

let interval: number | null = null;

export function updateAutoClicker() {
  if (Config.getConfig().autoClicker && interval == null) {
    //@ts-expect-error typescript is stupid
    interval = setInterval(Game.ClickCookie, 1);
  } else if (!Config.getConfig().autoClicker) {
    //@ts-expect-error interval isn't null
    clearInterval(interval);
    interval = null;
  }
}
