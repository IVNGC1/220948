class User {
    messages: number;
    warnings: number;
    registrationDate: Date;
    constructor(messages: number, warnings: number, registrationDate: Date) {
        this.messages = messages;
        this.warnings = warnings;
        this.registrationDate = registrationDate;
    }
}
class TrustedUser {
    user: User;
    constructor(user: User) {
        this.user = user;
    }
    getConfidenceRatio(): number {
        const messages = this.user.messages;
        const warnings = this.user.warnings;
        const registrationDays = Math.floor(
            (new Date().getTime() - this.user.registrationDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );
        return messages * 2 - warnings * 100 + registrationDays;
    }
}
class ConfidenceHelper {
    static checkConfidenceRatio(ratio: number): boolean {
        return ratio >= 0;
    }
}
const users: User[] = [
    new User(5, 0, new Date("2023-01-05")),
    new User(10, 1, new Date("2022-02-18")),
    new User(3, 2, new Date("2020-12-10")),
    new User(8, 3, new Date("2021-03-20")),
];
const untrustedUsers = users.filter(
    (u) => !ConfidenceHelper.checkConfidenceRatio(new TrustedUser(u).getConfidenceRatio())
);