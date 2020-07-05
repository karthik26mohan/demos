abstract class Avenger {
    name: string;
    weapon: string;
    constructor(name: string, weapon?: string) {
        this.name = name;
        this.weapon = weapon ?? null;
    }

    abstract fight(): string;
}

export class ThrowingAvenger extends Avenger {
    fight() {
        return `${this.name} threw ${this.weapon}.`;
    }
}

export class ShootingAvenger extends Avenger {
    fight() {
        return `${this.name} shot ${this.weapon}.`;
    }
}

export class UnarmedAvenger extends Avenger {
    fight() {
        return `${this.name} kicked and punched.`;
    }
}