let fish = document.querySelector("#fishie");
let fishBorders = document.querySelector('.center-canvas');
let borders = fishBorders.getBoundingClientRect();
let startPosition = fish.getBoundingClientRect();
console.log(borders);

document.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  console.log(`Mouse X: ${x}`);
  
  fish.style.left = (startPosition.x) + (x) +'px';
});
