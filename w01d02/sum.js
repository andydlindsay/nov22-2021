const args = process.argv;

// args.shift(); // remove Node
// args.shift(); // remove the file name

// args.splice(0, 2);

const sliced = args.slice(2);

console.log('sliced', sliced);

// const somethingElse = ['4', '6', '5', '8', '4.5', '-100'];

let total = 0;

let i = 0;
while (i < sliced.length) {

  i++;
}


for (let i = 0; i < sliced.length; i++) {
  // console.log(somethingElse[i]);
  // total = total + somethingElse[i];
  
  // convert string to number
  const convertedNumber = Number(sliced[i]);

  // if (Number.isInteger(convertedNumber) !== true) {

  // if (Number.isInteger(convertedNumber)) {
  //   if (convertedNumber > 0) {
  //     total += convertedNumber;
  //   }
  // }

  if (Number.isInteger(convertedNumber) && convertedNumber > 0) {
    total += convertedNumber;
  }

  // total += Number(myArr[i]);
}

console.log('sum: ', total);
