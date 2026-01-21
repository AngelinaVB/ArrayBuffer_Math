import Math from "./app";

export class Magician extends Math {
    constructor(name, attack = 25, stoned = false, space) {
        super(name, attack, stoned, space);
    }
}

export class Daemon extends Math {
    constructor(name, attack = 30, stoned = false, space) {
        super(name, attack, stoned, space);
    }
}