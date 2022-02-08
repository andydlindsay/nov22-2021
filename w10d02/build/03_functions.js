"use strict";
// parameters, return value
const sayHello = (name, age) => {
    return `hello there ${name}`;
};
sayHello('Alice', 42);
// sayHello(42);
const returningPromise = (arg) => {
    return Promise.resolve(arg);
};
returningPromise('hello').then((data) => { });
