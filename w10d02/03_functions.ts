// parameters, return value

// sayHello(Number(req.body.age))

const sayHello = (name: string, age: number): string => {
  return `hello there ${name}`;
};

sayHello('Alice', 42);
// sayHello(42);

const returningPromise = (arg: string): Promise<string> => {
  return Promise.resolve(arg);
};

returningPromise('hello').then((data) => {});

const higherOrderFunction = (callback: (arg: number) => boolean, age: number) => {
  const result = callback(age)
};
