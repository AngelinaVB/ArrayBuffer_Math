import Character from "./character";

export default class Math extends Character {
    constructor(name, attack, stoned, space) {
        super(name, attack, stoned, space);
        this.space = space;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    get attack() {
        return this._attack;
    }

    set attack(value) {
        let calc = value * ((this.space - 1) / 10);

        if (this.stoned) {
            calc -= Math.log2(this.space) * 5;
        }
        this._attack = 0;
        if (calc > 0) { this._attack = Math.floor(calc) };
        if (calc > 100) { this._attack = 100 };
        return calc;
    }
}