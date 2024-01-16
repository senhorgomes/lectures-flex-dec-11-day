const higherOrderFunc = function (callback) {
  const data = { initials: "BG" };

  console.log("BEFORE TIMEOUT CALL");
  setTimeout(() => {
    data.initials = "YAV";
    console.log(data.initials);
    callback();
  });

  console.log("AFTER TIMEOUT CALL");
};

console.log("BEFORE MAIN CALL");
const result = higherOrderFunc(() => {
  console.log("INSIDE CALLBACK");
});

console.log("AFTER MAIN CALL");


//What comes first?
// Before Main Call
// Inside Callback //BEFORE TIMEOUT CALL//After Main Call
// AFTER MAIN CALL //YAV //AFTER TIMEOUT CALL
// INSIDE CALLBACK
// YAV
// 

// Before time
// Before mainb call
// inside call
// After main
// YAV