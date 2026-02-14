import { Config } from "../menus/config";

export function patchShimmer() {
  const origShimmer = Game.shimmer;

  Game.shimmer = function (type: any, obj: any, noCount: any) {
    origShimmer.call(this, type, obj, noCount);

    if (Config.getConfig().autoClickShimmers) {
      const origUpdate = this.update;

      this.update = function (e: any) {
        origUpdate.call(this, e);

        this.pop();
      };
    }
  };

  Game.shimmer.prototype = origShimmer.prototype;
}
