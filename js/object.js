"use strict";
const student = {
    name: "Pranta",
    age: 23,
    isYoung: true,
};
const employee = {
    name: "Sakib",
    age: 45,
    isYoung: false,
};
// object types
function getAge(player) {
    return player.age;
}
getAge({ name: "kuddus", age: 50 });
function getAge2(player) {
    return player.age;
}
getAge2({ name: "hello", age: 50, isYoung: false });
