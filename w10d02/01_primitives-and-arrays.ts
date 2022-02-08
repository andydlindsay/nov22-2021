let username: string | number | boolean = 'Alice';

username = 'Bob';
username = 42;
username = false;

const myArr: (number | string)[] = [];
myArr.push(4);
myArr.push('hello');
// myArr.push(true);

const myVal = myArr.pop();
