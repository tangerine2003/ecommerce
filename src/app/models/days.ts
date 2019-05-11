export class Days {
    day: Date;
    increment: number;
    nextDay: number;

    constructor(increment: number) {
        this.increment = increment;
        this.nextDay = this.dayofweekselection();

    }

    dayofweekselection() {
        const today = new Date;
        const nextDay = new Date();
        return nextDay.setDate(today.getDate() + this.increment);
    }

}
