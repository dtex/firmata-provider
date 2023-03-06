import Firmata from "firmata";

/** 
 * Class representing a single board connection. In TC-53 parlance, a board is a provider.
 * @classdesc TC-53 provider for node.js that uses the firmata protocol.
 * 
 */
class Provider {

  #board = null;
  
  /**
   * Provider
   * @constructor
   * @param {String|Transport} pathOrPort -
   * @param {[Object]} options -
   */
  constructor(pathOrPort, options) {
    // return (async () => {
    //   console.log(arguments);
    // })();
    return new Promise(
      (resolve, reject) => {
        this.#board = new Firmata(pathOrPort, () => {
          resolve({});
        });
      }
    );
  }

  Digital() {
    return new _Digital(...arguments, this.#board);
  }

}

class _Digital {

  #pin;

  constructor(opts) {
    this.#pin = opts.pin;
    
  }

}

export default Provider;