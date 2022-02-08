interface ITreat {
  name: string;
  tastiness: number;
}

interface IDog {
  id?: number;
  name: string;
  breed: string;
  hasFleas: boolean;
  treats: ITreat[];
  removeFleas: (shampoo: string) => IDog
};

const dog: IDog = {
  removeFleas: function(shampoo: string) {
    return this;
  },
  // id: 6,
  name: 'Benji',
  breed: 'Labrador Retriever',
  hasFleas: false,
  treats: [
    { name: 'kibble', tastiness: 7 }
  ]
};

const myDogArray: IDog[] = [];
myDogArray.push(dog);
// myDogArray.push('hello');
