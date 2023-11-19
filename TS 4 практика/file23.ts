////////////////////1 часть///////////////
interface Run {
    run(): void;
}
interface Fly {
    fly(): void;
}
interface Swim {
    swim(): void;
}
// Абстрактный класс Person, реализующий интерфейс
abstract class Person implements Run, Fly, Swim {
    // Методы
    abstract run(): void;
    abstract fly(): void;
    abstract swim(): void;
}
// Пример дочернего класса, который расширяет Person и реализует интерфейсы
class SuperPerson extends Person {
    run(): void {
        console.log("Бежит чел");
    }
    fly(): void {
        console.log("Чел летит");
    }
    swim(): void {
        console.log("Чел плывет");
    }
}
const superPerson = new SuperPerson();
superPerson.run();
superPerson.fly();
superPerson.swim();
///////////2 часть///////////
interface CanRun {
    run(): void;
}
interface CanSwim {
    swim(): void;
}
interface CanFly {
    fly(): void;
}
// Человек
abstract class Human implements CanRun, CanSwim, CanFly {
    abstract run(): void;
    abstract swim(): void;
    abstract fly(): void;
}
// Легкоатлеты
class NibiruLegathlete extends Human {
    run(): void {
        console.log("Легкоатлет бежит");
    }
    swim(): void {
        console.log("Легкий не может плять");
    }
    fly(): void {
        console.log("Легкий не может летать");
    }
}
// Земляни 
class Earthling extends Human {
    run(): void {
        console.log("Землянин бежит");
    }
    swim(): void {
        console.log("Землянин плывет");
    }
    fly(): void {
        console.log("Землянин не умееет летать");
    }
}
// Криптонцы 
class Kryptonian extends Human {
    run(): void {
        console.log("Крипта бежит");
    }
    swim(): void {
        console.log("Крипта плывет");
    }
    fly(): void {
        console.log("Крипта летит");
    }
}
const nibiruLegathlete = new NibiruLegathlete();
nibiruLegathlete.run();
nibiruLegathlete.swim();
nibiruLegathlete.fly();
const earthling = new Earthling();
earthling.run();
earthling.swim();
earthling.fly();
const kryptonian = new Kryptonian();
kryptonian.run();
kryptonian.swim();
kryptonian.fly();