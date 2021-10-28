// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)

// run with node name.path (e.g. node app.js)

const john = 'john';
const peter = 'peter';

const sayHello = (name) =>{
  console.log(`Hello there is ${name}`);
}

sayHello('susan');
sayHello('Abdul');
sayHello(john);
sayHello(peter);