var promise1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, "uno"); 
}); 
var promise2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, "dos"); 
});
var promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "tres");
});
var promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "cuatro");
});
var promise5 = new Promise((resolve, reject) => {
  reject("reject");
  // setTimeout(resolve, 5000, "cinco");
});

let promises = [promise1, promise2, promise3, promise4, promise5];

Promise.all(promises).then(
  result => { 
    console.log(result);
    // console.log(result[3]);
  }, 
  error => {
    console.log(error);
  });
