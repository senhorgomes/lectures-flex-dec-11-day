//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs").promises; // Use fs.promises for Promise-based methods


function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function calculateSum() {
    try {
      const data1 = await readFilePromise('./data1.txt');
      const data2 = await readFilePromise('./data2.txt');
      const data3 = await readFilePromise('./data3.txt');
  
      const totalSum = Number(data1) + Number(data2) + Number(data3);
      console.log("Final total is:", totalSum);
    } catch (err) {
      console.error("Error reading files:", err);
    }
  }
  
  calculateSum();