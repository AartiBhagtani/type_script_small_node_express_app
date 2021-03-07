// batch of core data type are number, string, boolean, array, object.

const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const button = document.querySelector('button')!;

// generics
const numResults: Array<number> = [];
// normally defining type
const stringResults: string[] = [];

type numString = number | string;
type resultType = {val: number; timestamp: Date};

// or
interface resultTypeObject{
  val: number; 
  timestamp: Date
};

function add(num1: numString, num2: numString) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else if((typeof num1 === 'string' && typeof num2 === 'string')) {
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
}

function printResults(result: resultType) {
  console.log(result.val)
  console.log(result.timestamp)
}

button.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  var result = add(+num1, +num2);
  numResults.push(result as number);
  var string_result = add(num1, num2);
  stringResults.push(string_result as string);
  console.log(numResults);
  console.log(stringResults);
  printResults({val: result as number, timestamp: new Date()})
})

// promises are supported from ES6 version changed json config
// Promises are other types where we can specify type according to what it will resolve to - 'generics'
const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('It worked')
  }, 1000)
})

myPromise.then((result) => {
  console.log(result);
})