const num = 5;
console.log("Hello From TypeSript!", num, "Bye!");

// Types
/* let money = 450;
// money = "";//not accepted in TS
let msg = "hello";
let cond = true; */

let money: number = 450;
// money = "";//not accepted in TS
let msg: string = "hello";
let cond: boolean = true;
console.log(money, msg, cond);
