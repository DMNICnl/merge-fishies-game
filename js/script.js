const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 20);
ctx.lineTo(500, 20);
const endLine = ctx.strokeStyle = "blue";
ctx.stroke();

