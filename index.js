const fs = require('fs');
// Reading file asynchronously with callback
fs.readFile('example.txt', 'utf8', (err, data) => {
if (err) {
console.error('Error reading file:', err);
return;

}
console.log('File content:', data);
});
console.log('This line executes before file is read');


const fsPromises = require('fs').promises;
async function readFileAsync() {
try {
const data = await fsPromises.readFile('example.txt', 'utf8');
console.log('File content:', data);
} catch (err) {
console.error('Error reading file:', err);
}
}
readFileAsync();

// write files 

const fs = require('fs');
const content = 'Hello, this is sample content!';
fs.writeFile('output.txt', content, 'utf8', (err) => {
if (err) {
console.error('Error writing file:', err);
return;
}
console.log('File written successfully');
});
