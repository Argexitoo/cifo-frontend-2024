// ALBERT ARGES

export default class Laptop {
    constructor(brand, model, screenSize, ram, storage) {
      this.brand = brand;
      this.model = model;
      this.screenSize = screenSize;
      this.ram = ram;
      this.storage = storage;
    }
  
    upgradeRAM(newRAM) {
      this.ram = newRAM;
    }
  }
  
  export function isAppCompatible(appName, osVersion) {
    return appName === 'Photoshop' && osVersion >= 10;
  }
  