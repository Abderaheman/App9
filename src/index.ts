// main.ts

interface Vehicle {
    marque: string;
    modèle: string;
    année: number;
    start(): void;
}

class Car implements Vehicle {
    marque: string;
    modèle: string;
    année: number;

    constructor(marque: string, modèle: string, année: number) {
        this.marque = marque;
        this.modèle = modèle;
        this.année = année;
    }

    start(): void {
        console.log("Moteur de voiture démarré");
    }
}

const maVoiture = new Car("Toyota", "Corolla", 2020);
maVoiture.start();
