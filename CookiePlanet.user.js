// ==UserScript==
// @name CookiePlanet
// @author goodbee
// @match *://orteil.dashnet.org/cookieclicker/
// @grant none
// ==/UserScript==

const interval = setInterval(() => {
  if (Game != undefined && Game.ready != undefined && Game.ready) {
    Game.LoadMod("https://schoenebiene.github.io/CookiePlanet/CookiePlanet.js");
    clearInterval(interval);
  }
}, 1000);
