const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json').toString();
const data = JSON.parse(dataBuffer);
console.log(data);

data.name = 'Mohammed';
data.age = 22;

console.log(data);

const dataJson = JSON.stringify(data);

let saveData = function(path) {
	fs.writeFileSync(path, dataJson);
};

saveData('1-json.json');

//Save this object to .json
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);

// const data = dataBuffer.toString();
// console.log(data);

// const data = JSON.parse(data);
// console.log(data.title);
