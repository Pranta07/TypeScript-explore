type Person = { name: string; age: number; isYoung: boolean };

const student: Person = {
    name: "Pranta",
    age: 23,
    isYoung: true,
};

const employee: { name: string; age: number; isYoung: boolean } = {
    name: "Sakib",
    age: 45,
    isYoung: false,
};

// object types
function getAge(player: { name: string; age: number }): number {
    return player.age;
}
getAge({ name: "kuddus", age: 50 });

function getAge2(player: Person): number {
    return player.age;
}
getAge2({ name: "hello", age: 50, isYoung: false });
