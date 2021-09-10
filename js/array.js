"use strict";
const friends = ["sakib", "hakib", "jakib"];
const salary = [1000, 2000, 3000];
salary.push(2524);
salary[0] = 2348;
/* //not accepted in TS
salary.push("2524");
salary[0] = "2348";
 */
for (const x of salary) {
    console.log(x);
}
