class Job {//Работа - должность, зарплата
    private role: string;
    private salary: number;
    constructor(role: string, salary: number) {
        this.role = role;
        this.salary = salary;
    }
    getSalary(): number {
        return this.salary;
    }
    work(personName: string): void {
        console.log(`${personName} ${this.role}`);
    }
}
class Person {//Человек - имя, работа
    private job: Job;
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    setJob(job: Job): void {
        this.job = job;
    }
    getSalary(): number {
        return this.job ? this.job.getSalary() : 0;
    }
    work(): void {
        if (this.job) {
            this.job.work(this.name);
        } else {
            console.log(`${this.name} -`);
        }
    }
}
// Задаем людей
const person1 = new Person("Абдул");
const person2 = new Person("Джозефф");
const person3 = new Person("Дио");
// Задаем работы
const job1 = new Job("Циркач", 5000);
const job2 = new Job("Клоун", 7000);
const job3 = new Job("Президент", 4000);
// Работы для людей
person1.setJob(job1);
person2.setJob(job2);
person3.setJob(job3);
// работа
person1.work();
person2.work();
person3.work();
// мЕняем работу для людей
person1.setJob(job2);
person2.setJob(job3);
person3.setJob(job1);
// Работаем
person1.work();
person2.work();
person3.work();
// Зарплата
console.log(`зп ${person1.name}: ${person1.getSalary()}`);
console.log(`зп ${person2.name}: ${person2.getSalary()}`);
console.log(`зп ${person3.name}: ${person3.getSalary()}`);