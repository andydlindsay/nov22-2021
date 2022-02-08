// problem: when interface is created, not sure the type(s) involved

interface IContainer<T, A, B> {
  name: string;
  contents: T;
  arr?: A[],
  moreStuff?: B
}

const stringContainer: IContainer<string, string, number> = {
  name: 'string container',
  contents: 'hello there'
}

const numberContainer: IContainer<number, number, boolean> = {
  name: 'number container',
  contents: 42
}
