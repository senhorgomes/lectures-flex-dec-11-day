//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs")
//Read all three text files, and add them up

let totalSum = 0;

// fs.readFile('./data1.txt', 'utf-8',(err, data) => {
//     if (err) {
//         throw err
//     };
//     // The data that is being retrieved will always be a string
//     totalSum += Number(data);
//     // console.log(totalSum);
//     // We dont know how long these files will take to read
//     fs.readFile('./data2.txt', 'utf-8',(err, data) => {
//         if (err) {
//             throw err
//         };

//         totalSum += Number(data);

//         fs.readFile('./data3.txt', 'utf-8',(err, data) => {
//             if (err) {
//                 throw err
//             };

//             totalSum += Number(data);
//             console.log("Final total is:", totalSum);
//           });
//       });
//   });
  fs.readFile('./data1.txt', 'utf-8',(err, data) => {
    if (err) {
        throw err
    };
    // The data that is being retrieved will always be a string
    totalSum += Number(data);
    // console.log(totalSum);
    // We dont know how long these files will take to read
});
fs.readFile('./data2.txt', 'utf-8',(err, data) => {
    if (err) {
        throw err
    };

    totalSum += Number(data);

});
fs.readFile('./data3.txt', 'utf-8',(err, data) => {
    if (err) {
        throw err
    };

    totalSum += Number(data);
    console.log("Final total is:", totalSum);
  });
