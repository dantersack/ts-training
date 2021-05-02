class Vehicle {
    color: string

    constructor(color: string) {
        this.color = color
    }

    protected honk(): void {
        console.log('beep beep')
    }
}

class Car extends Vehicle {
    constructor(color: string, public wheels: number) {
        super(color)
    }

    private drive(): void {
        console.log('bbbrrummmm')
    }

    public startDriving(): void {
        this.drive()
    }

    public honkTheHorn() {
        this.honk()
    }
}

const car = new Car('red', 4)
car.startDriving()
car.honkTheHorn()
console.log(car.color)
console.log(car.wheels)