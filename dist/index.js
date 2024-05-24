"use strict";
// main.ts
class Car {
    constructor(marque, modèle, année) {
        this.marque = marque;
        this.modèle = modèle;
        this.année = année;
    }
    start() {
        console.log("Moteur de voiture démarré");
    }
}
const maVoiture = new Car("Toyota", "Corolla", 2020);
maVoiture.start();
